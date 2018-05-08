/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, es6 */

'use strict';
var pushButton = document.querySelector('.js-push-btn');
var isSubscribed = false;
var swRegistration = null;

//화면  UI 초기화, 브라우저 푸시 등록 여부 확인
function initialiseUI() {
  pushButton.addEventListener('click', function() {
    pushButton.disabled = true;
    if (isSubscribed) {
      //브라우저가 등록되어 있으면 push 등록을 해제하는 메서드
      unSubscribeUser();
    } else {
      //브라우저가 등록되어 있지않으면 push 서버에 등록
      subscribeUser();
    }
  });

  swRegistration.pushManager.getSubscription() //getSubscription 등록여부확인
  .then(function(subscription) { 
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log('User IS subscribed. 현재 브라우저는 등록되어 있습니다.');
    } else {
      console.log('User is NOT subscribed. 브라우저에 아직 push가 등록되어 있지 않습니다.');
    }

    updateBtn();
  });
}

//브라우저 push 서버에 등록하는 메서드
function subscribeUser() {
  swRegistration.pushManager.subscribe({
    // 푸시 수신 시 알람 표시 속성
    userVisibleOnly: true
  })
  .then(function(subscription) {
    console.log('User is subscribed:', subscription);
    isSubscribed = true;
    updateSubscriptionOnServer(subscription);
    updateBtn();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    updateBtn();
  });
}

//push 해제
function unSubscribeUser() {
  swRegistration.pushManager.getSubscription().then(function(subscription) {
    subscription.unsubscribe().then(function(successful) {
      console.log('User is unsubscribed : ', successful);
      console.log('Unsubscribed subscription : ', subscription);

      updateSubscriptionOnServer(subscription, successful);
      isSubscribed = false;

      updateBtn();
    }).catch(function(e) {
      console.log('Failed to unsubscribe the user: ', e);
      updateBtn();
    });
  });
}

function updateSubscriptionOnServer(subscription, unsubscribed) {
  var subscriptionJson = document.querySelector('.js-subscription-json');
  var subscriptionDetails = document.querySelector('.js-subscription-details');

  if (unsubscribed) {
    subscriptionDetails.classList.add('is-invisible');
    removeDeviceKeyInFirebase(subscription.endpoint.split('send/')[1]);
  } else {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');

    sendDeviceKeytoFirebase(subscription.endpoint.split('send/')[1]);
  }
}

// 브라우저의 푸쉬 등록 여부에 따라 버튼 활성화여부 결정
function updateBtn() {
  if (Notification.permission === 'denied') {
    pushButton.textContent = 'Push Messaging Blocked.';
    pushButton.disabled = true;
    updateSubscriptionOnServer(null);
    return;
  }

  if (isSubscribed) {
    pushButton.textContent = 'Disable Push Messaging';
  } else {
    pushButton.textContent = 'Enable Push Messaging';
  }

  pushButton.disabled = false;
}

//서비스워커 등록
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;
      initialiseUI();
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}
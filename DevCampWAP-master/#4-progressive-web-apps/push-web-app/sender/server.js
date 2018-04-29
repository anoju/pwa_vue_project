/*
서비스 워커등록 =>브라우저 push가 등록되어 있는지 확인 => 등록안되어 있는 경우 Push를 등록 => 등록된 단말기 key 값을 서버에 저장 => 서버에서 해당 Key 값으로 Push전송

1. 웹 앱 메니페스트 JSON 파일:sender_id(파이어베이스 설정)
2. Server Key (파이어베이스 설정)
  - 참고::egacy Server Key는 GCM 키이므로 사용하지 않을것
3. Device Key (파이어베이스 데이터베이스 안에 저장되어 있는 단말기의 유일한 키)
*/

var request = require('request');

//파이어베이스 프로젝트 설정의 server key
var serverKey = "key=" + "AAAAU59rj6c:APA91bHUdDr53yPOrNLim-ud50aZsd6GD_6nbocJqfxFF6MnrBz3gXV9GPbJ-u83MD7OZSUYO6GVx6wLCT5AlsrYWb9jI67bBM6PUFWjvVkgTpZqPP8F8HPRpUWkcbC2ahKp_PoqhWD6";

//브라우저 & 단말기 key 값
var deviceKey = "d1aJcfsxFug:APA91bGMyHcX-bzZRoeYeR8vqH62-TrgQG4BrsCskz8nB_iIuvwvNzsRtwhiyDIXkhBADVi0gLZQ510FxBlFOGVGRp7FkJ8IrF12ChWXhydNv9boJomxRqMWFASTSpMlJvldIASkcejF";
sendMessageToUser(serverKey, deviceKey);

function sendMessageToUser(serverKey, deviceKey, message) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': serverKey,
    },
    body: JSON.stringify(
      {
        "registration_ids": [
          deviceKey
        ]
      }
    )
  }, function(error, response, body) {
    console.log("Result Log - ", body);
    if (error) {
      console.error(error, response, body);
    } else if (response.statusCode >= 400) {
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
    } else {
      console.log('Done!');
    }
  });
};

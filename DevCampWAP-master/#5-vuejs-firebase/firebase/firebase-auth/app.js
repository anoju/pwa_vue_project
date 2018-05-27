var input = document.querySelectorAll('input');
var button = document.querySelectorAll('button');
var log = document.querySelector('p');
var provider = new firebase.auth.GoogleAuthProvider();

function firebaseSignIn(e){
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(getEmail(), getPassword())
    .catch(function(error) {
        console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    })
    .then((result) => {
        console.log(result)
    });
}
function firebaseSignInWithGoogle(e){
    e.preventDefault();    
    //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    /*
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      */
     firebase.auth().signInWithPopup(provider)
     .then((result) => {
        console.log(result);
     }).catch((error) => {
        console.log(error);
     })
}

var getEmail = function () {
    return input[0].value;
  };
  
  var getPassword = function () {
    return input[1].value;
  };
  
  var exceptionHandler = function () {
    if ( getEmail() === "" || getPassword() === "") {
      alert("enter the email and password");
      return true;
    }
    return false;
  };
  
  var clearForm = function () {
    input[0].value = "";
    input[1].value = "";
  };
  
  window.onload = function () {
    button[0].addEventListener('click', firebaseSignIn);
    button[1].addEventListener('click', firebaseSignInWithGoogle);
    // button[2].addEventListener('click', firebaseSignUp);
  };
function login() {
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;
  // todo: call the api
  $.ajax({
    "type": "POST",
    "url": "http://localhost:5754/api/v1/userSignIn",
    "data": JSON.stringify({
      "fullName": email,
      "password": password,
      // email: obj.email,
      // role: obj.role
    }),
    "contentType": "application/json",
    "dataType": "json",
    success: function (dataString) {
      console.log('**response from server : ', dataString);
    }
  });

}
// function loginInSystem(obj) {
//   console.log('obj : ', obj);
//   // console.log('JSON.parse(obj) : ', JSON.parse(obj));
//   $.ajax({
//     "type": "POST",
//     "url": "http://localhost:5754/api/v1/userSignUp",
//     "data": JSON.stringify({
//       "fullName": obj.fullName,
//       "password": obj.password,
//       // email: obj.email,
//       // role: obj.role
//     }),
//     "contentType": "application/json",
//     "dataType": "json",
//     success: function (dataString) {
//       console.log('**response from server : ', dataString);
//     }
//   });
//   console.log('end');
// }
window.login = login;
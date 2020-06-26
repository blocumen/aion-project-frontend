function login() {
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;
  $.ajax({
    "type": "POST",
    "url": "http://localhost:5754/api/v1/userSignIn",
    "data": JSON.stringify({
      "email": email,
      "password": password,
      // email: obj.email,
      // role: obj.role
    }),
    "contentType": "application/json",
    "dataType": "json",
    success: function (dataString) {
      console.log('**response from server : ', dataString);

      // set to localstorage 
      console.log('localStorage : ',localStorage);
      localStorage.setItem('loginToken', dataString.token);
      localStorage.setItem('userType',dataString.user.role);
      localStorage.setItem('id',dataString.user._id);
      localStorage.setItem('fullName',dataString.user.fullName);
      console.log('logintoken : ',localStorage.getItem('loginToken'));
    }
  });

}

window.login = login;
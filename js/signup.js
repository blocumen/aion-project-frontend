// this is working
async function signup() {
  const name = document.getElementsByName('name')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;
  const userTypes = document.getElementsByName('userType');
  let userTypeSelected;
  await aiwa.enable();
  // get public
<<<<<<< HEAD
  let publicKey = aionWeb3.eth.accounts;
  console.log(publicKey);
=======
  const publicKey = window.aionweb3.eth.accounts[0][0];
>>>>>>> dc4199b022ffee392a5c2a5fa6a3c7597cb417a5
  console.log('aionWeb3 test 123: ');
  for (var i = 0; i < userTypes.length; i++) {
    if (userTypes[i].checked) {
      userTypeSelected = userTypes[i].value;
    }
  }
  postRequest({
    fullName: name,
    email,
    password,
    role: userTypeSelected,
    publicKey
  });
  console.log('selected user : ', userTypeSelected);

  // todo: call the api
  // if api success then move to login page
  // window.location.replace("../html/login.html");
}

function postRequest(obj) {
  console.log('obj : ', obj);
  // console.log('JSON.parse(obj) : ', JSON.parse(obj));
  $.ajax({
    "type": "POST",
    "url": "http://localhost:5754/api/v1/userSignUp",
    "data": JSON.stringify({
      "fullName": obj.fullName,
      "password": obj.password,
      "email": obj.email,
<<<<<<< HEAD
      "role": obj.role
=======
      "role": obj.role,
      "publicKey": obj.publicKey
>>>>>>> dc4199b022ffee392a5c2a5fa6a3c7597cb417a5
    }),
    "contentType": "application/json",
    "dataType": "json",
    success: function (dataString) {
      console.log('**response from server : ', dataString);
    }
  });
  console.log('end');
}

window.signup = signup;
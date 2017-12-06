function reg(){
  var user = document.getElementById("username");
  var pass = document.getElementById("password");

  //var uCheck = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!@#$%^&*])[A-Za-z\d?!@#$%^&*]{4,20}$/);
  //var pCheck = new RegExp(/^.{4,10}$/);

  //Confirm if username meets requirement
/*   if(uCheck.exec(user.value) == undefined){
    alert("Username doesn't meet requirement");
    return;
  }


  if(pCheck.exec(pass.value) == undefined){
    alert("Password doesn't meet requirement");
    return;
  } */

  if ( !/^.{6,20}$/.test(user.value) ) {
    alert("Username doesn't meet requirement");
    return;
  }

  if ( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!@#$%^&*])[A-Za-z\d?!@#$%^&*]{6,20}$/.test(pass.value) ) {
    alert("Password doesn't meet requirement");
    return;
  }

  //User information
  var users;

  if (window.localStorage.getItem("Users") != null) {
    users = JSON.parse( window.localStorage.getItem("Users") );
  } else {
    users = [];
  }

  // Check if the username is taken;
  for (var i = 0; i < users.length; i++) {
    if (users[i].username == user.value) {
      alert("Username already taken");
      return;
    }
  }

  var user = {
    username: user.value,
    password: pass.value
  };
  users.push(user);

  // Save the users
  str = JSON.stringify(users);
  localStorage.setItem("Users", str);

  //str = JSON.stringify(user);
  //localStorage.setItem("Login", str);

  window.location.href = "play.html";
}

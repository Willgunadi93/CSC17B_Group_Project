function reg() {
	var user = document.getElementById("username");
	var pass = document.getElementById("password");

	if (!/^.{6,20}$/.test(user.value)) {
		alert("Username doesn't meet requirement");
		return;
	}

	if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!@#$%^&*])[A-Za-z\d?!@#$%^&*]{6,20}$/.test(pass.value)) {
		alert("Password doesn't meet requirement");
		return;
	}

	//User information
	var users;

	if (window.localStorage.getItem("Users") != null) {
		users = JSON.parse(window.localStorage.getItem("Users"));
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

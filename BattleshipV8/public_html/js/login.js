//Function to verify
function vUserPass(username, password) {
	// load in the information for user
	var temp = window.localStorage.getItem("Users");
	//parsing client's username and password
	var client;

	if (temp != null) {
		client = JSON.parse(temp);
	} else {
		client = [];
	}
	//Console.log for testing
	console.log(client);
	//Default value of -3
	var val = -3;
	//Checking username match in local storage
	//create array of usernames and passwords
	for (var i = 0; i < client.length; i++) {
		if (client[i].username == username)
			val = i;
	}

	if (val <= -3) {
		alert("Incorrect username + password combination");
		return;
	}

	//check password in local storage
	if (client[val].password != password) {
		alert("Incorrect username + password combination");
		return;
	}
	return client[val];
}
//login function
function login(username, password) {
	//Checking login
	var client = vUserPass(username, password);
	if (client == undefined)
		return false;
	str = JSON.stringify(client);
	localStorage.setItem("Info", str);
	return true;
}
//Log in function
function chkLogin() {
	var str = window.localStorage.getItem("Login");

	if (str != null) {
		var login = JSON.parse(str);

		var user = vUserPass(login.username, login.password);

		//check user
		if (user == undefined) {
			return false;
		} else return true;
	} else return false;
}

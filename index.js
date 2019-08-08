function Submit (){
	var login = document.getElementById("login").value;
	var pass = document.getElementsById("pass").value;

	fetch("file:///C:/Users/User/Desktop/trying/index.json", {login, pass}).then((result) => {
		if(login === result.login && pass === result.pass){
			alert("login was successful")
		}
		else{
			alert("pass or login was incorrect")
		}
	})
}

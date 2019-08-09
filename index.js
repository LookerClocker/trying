// function Submit (event){
// 	event.preventDefault(); // You need "event.preventDefault()" to prevent or cancel event which has been firing by clicking on the button
// 	var login = document.getElementById("login").value;
// 	var pass = document.getElementsById("pass").value;
//
// 	fetch("index.json", {method: 'GET'}).then((result) => { // You need "{method: 'GET'}" to let to know what kind of method you want to use. It could be POST or GET or smth..
// 		if(login === result.login && pass === result.pass){
// 			alert("login was successful")
// 		}
// 		else{
// 			alert("pass or login was incorrect")
// 		}
// 	})
// 		.catch(e => console.log('Your error - ', e)) // - You need "catch" to handle error which can occur during request
// }


var submitButton = document.getElementById("submit");

submitButton.onclick = (event) => {
  event.preventDefault();

  var login = document.getElementById("login").value;
  var pass = document.getElementById("pass").value;


  fetch("index.json", {method: 'GET'})
    .then((result) => {
      if (result.status === 200) {
        return result.json()
      }
    })
    .then((result) => {
      if (login === result.login && pass === result.pass) {
        alert("login was successful")
      }
      else {
        alert("pass or login was incorrect")
      }
    })
    .catch(e => console.log('Your error - ', e))
}
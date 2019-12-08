var firebase = require('firebase-admin');

//var firebaseRef = new Firebase('https://1:448364233026:web:2ea99406124e9d336148db.firebaseio.com/');

function addUser(email, password, callback) {

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
}


function authenticate(email, password, callback) {

	firebaseRef.authWithPassword({
	
		email : email, 
		password : password
	
	}, function(error, authData) {
	
		callback(error, authData);

	});

}

module.exports = {

	addUser : addUser,
	authenticate : authenticate

}
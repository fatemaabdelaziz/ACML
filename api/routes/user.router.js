const express = require('express');
var router = express.Router();

var admin = require("../Firebase-admin");
var Firebase = require('../Firebase-t');

//Sign up
router.post('/signup', (req, res) => {

  admin.auth().createUser({
    email: req.body.email,
    password: req.body.password
  })
    .then(function (userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord.uid);
      return res.send({ userId: userRecord.uid });
    })
    .catch(function (error) {
      console.log("Error creating new user:", error);
      return res.send({ error: error })
    });
}
)

router.post('/signin', (req, res) => {

  // Firebase.auth().signInWithEmailAndPassword()
  Firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then((user) => {
    console.log(user);
    res.send(user);
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    res.send({ errorMessage })
    console.log(errorCode);
    console.log(errorMessage);
  });
}
)


// //Create new user
// router.post('/create', function(req, res) {


// 	var newUserEmail = req.body.email;
// 	var newUserPass = req.body.password;

// 	userService.addUser(newUserEmail, newUserPass, 

// 		function(error, uid) {

// 			if (error) {
// 				return res.status(500).send('Error when creating user');

// 			} else {			
// 				return res.status(201).send({uid : uid});
// 		}
// 	});
// });

// //Perform authentication
// router.post('/login', function(req, res){

// 	var userEmail = req.body.email;
// 	var userPassword = req.body.password;

// 	userService.authenticate(userEmail, userPassword,

// 		function(error, authData) {

// 			if (error) {
// 				return res.status(401).send('Unauthorized');

// 			} else {
// 				return res.status(200).send(authData);
// 		}

// 	});
// });


module.exports = router;
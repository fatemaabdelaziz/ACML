var admin = require('firebase-admin');

var serviceAccount = require("./service-account-file.json");

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://popcorn-f9ffc.firebaseio.com"
});

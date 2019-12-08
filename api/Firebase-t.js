var firebase = require('firebase');

var serviceAccount = require("./service-account-file.json");
const dotenv = require('dotenv')
dotenv.config()

module.exports = firebase.initializeApp({
    apiKey: process.env.apiKey,                             // Auth / General Use
    authDomain: process.env.authDomain,         // Auth with popup/redirect
    databaseURL: process.env.databaseURL, // Realtime Database
  });
const express = require('express');
var router =express.Router();
var admin = require("firebase-admin");
let db = admin.firestore()
let doc = db.collection('usersFavorite')

router.post('/add', async (req,res) =>
{
    let uid = req.body.uid;
    let movieId = req.body.movieId;
    const favorite =await doc.add({
        uid,
        movieId
    })
    if(favorite){
        return res.send({added:true})
    }
    else{
        return res.send({added:false})
    }
})

module.exports =router;
const express = require('express');
var router =express.Router();
var admin = require("firebase-admin");
let db = admin.firestore()
let doc = db.collection('usersFavorite')

router.post('/addRemove', async (req,res) =>
{
    let uid = req.body.uid;
    let movieId = req.body.movieId;
    let exists=false;
    let docId;
    await doc.where('uid','==',uid).where('movieId','==',movieId).get().then(snapshot =>{
        snapshot.docs.map(oneElement =>{
            if(oneElement.data().movieId){
            docId=oneElement._ref._path.segments[1]
            exists=true;
            }
        })})
        if(!exists){
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
}
else{
    const removed = await doc.doc(docId).delete();
    if(removed){
        return res.send({removed:true})
    }
    else{
        return res.send({removed:false})
    }
}
})

router.post('/userFavorites', async (req,res) =>
{
    let uid = req.body.uid;
    let userFavorites =[]
 await doc.where('uid','==',uid).get().then(snapshot =>{
        snapshot.docs.map(oneElement =>{
            userFavorites.push(oneElement.data().movieId)
        })
        return res.send({userFavorites})
    })

})
module.exports =router;
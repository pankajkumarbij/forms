const express = require("express");
const router = express.Router();
const User=require('../models/user')
var ObjectId = require('mongodb').ObjectID;

/********************************ADD A NEW POST ******************************/
router.post('/',(req,res)=>{
    var newPost = new User({
        name: req.body.name,
        email: req.body.email,
        mobile_no: req.body.mobile_no
    })
   newPost.save()
    .then(post => {
        res.json(post);
        console.log(post);
    })
    .catch(err => res.json(err))
    
}) 
router.get('/display',(req, res)=>{
    var posts = User.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
});
router.get('/display/:id',(req, res)=>{
    var posts = User.find({'_id':req.params.id}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
});
router.get('/deleteUser/:id',(req, res) =>{ 
    User.findOneAndRemove({'_id':req.params.id})
    .then((user) => {
        if(user){
            var message = { success: "sucessfully deleted" };
            res.json(message);
        }else{
            var message = { success: "User not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { success: false, err: err };
        res.json(message);
    })
});
router.put('/updateUser/:id',(req, res) =>{ 
    var newupdate = {
        name: req.body.name,
        email: req.body.email,
        mobile_no: req.body.mobile_no
    }
    User.findOneAndUpdate({'_id':req.params.id},newupdate)
    .then((user) => {
        if(user){
            var message = { success: "sucessfully updated" };
            res.json(message);
        }else{
            var message = { success: "User not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { success: false, err: err };
        res.json(message);
    })
});

module.exports = router;

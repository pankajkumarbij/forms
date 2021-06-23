const express = require("express");
const router = express.Router();
const User=require('../models/user')

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

module.exports = router;
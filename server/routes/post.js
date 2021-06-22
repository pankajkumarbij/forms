const express = require('express');
const Post = require("../models/user");
const router = express.Router();

/********************************ADD A NEW POST ******************************/

router.post('/',async (req,res,next) => {

    var newPost = new Post({
        name: req.body.name,
        email: req.body.email,
        mobile_no: req.body.mobile_no
    })
   await newPost.save()
    .then(post => {
        console.log(post);
        res.json(post);
        //res.send(post);
    })
    .catch(err => res.json(err))
    
}) 
module.exports = router;

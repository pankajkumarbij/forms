const express = require("express");
const router = express.Router();
const User=require('../models/user')
/********************************ADD A NEW POST ******************************/
router.post('/',(req,res)=>{
    var newPost = new User({
        name: req.body.name,
        email: req.body.email,
        mobile_no: req.body.mobile_no
    })
   newPost.save()
    .then(post => {
        res.send(post);
        console.log(post);
    })
    .catch(err => res.json(err))
    
}) 
module.exports = router;

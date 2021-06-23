const express = require("express");
const router = express.Router();
const User=require('../models/user')

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
            var message = { error: "User not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { success: false, err: err };
        res.json(message);
    })
});

module.exports = router;
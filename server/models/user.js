const mongoose = require('mongoose');

const user=new mongoose.Schema({
    name: {
        type: String,
    },
    mobile_no: {
        type: Number,
    },
    email:{
        type:String,
    }
});
var User = mongoose.model('User', user);
module.exports = User;

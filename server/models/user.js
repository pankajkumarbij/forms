const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
    },
    mobile_no: {
        type: Number,
    },
    email:{
        type:String,
    }
}));
exports.User = User;

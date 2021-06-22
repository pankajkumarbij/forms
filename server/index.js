const express=require('express');
const app=express();
const post_details = require('./routes/post');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Users',{ useUnifiedTopology: true,useNewUrlParser:true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
   
app.get('/',(req,res)=>{
    res.send("hello");
})
app.use('/api/post', post_details);
app.listen(5000,()=>{
    console.log("backend run");
})
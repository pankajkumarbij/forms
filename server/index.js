const express=require('express');
const app=express();
const post_details = require('./routes/post');
//mongoDb connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Users')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
   
app.get('/',(req,res)=>{
    res.send("hello");
})
app.use(express.json());
app.use('/api/post', post_details);

app.listen(5000,()=>{
    console.log("backend run");
})
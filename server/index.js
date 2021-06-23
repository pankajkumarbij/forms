const express=require('express');
const app=express();
const cors = require('cors');
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const InsertPost = require('./routes/insertpost');
const DeletePost = require('./routes/deletepost');
const UpdatePost = require('./routes/updatepost');
const DisplayPost = require('./routes/displaypost');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Users',{ 
    useUnifiedTopology: true,
    useNewUrlParser:true 
})
.then(() => console.log('Connected with MongoDB Successfully'))
.catch(err => console.error('Something went wrong', err));
   
app.get('/',(req,res)=>{
    res.send("WelCome in server");
})

app.use('/', InsertPost);
app.use('/', DisplayPost);
app.use('/', DeletePost);
app.use('/', UpdatePost);

app.listen(5000,()=>{
    console.log("Backend is running successfully");
})
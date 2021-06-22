const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.send("Hello");
})

app.listen(5000,()=>{
    console.log("Backend Running on port 5000");
})
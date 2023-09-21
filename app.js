const express=require('express');
const app=express();
const cors=require("cors")
require('dotenv').config();
require('./connection')
const router=require('./route/user')
PORT=process.env.PORT||8000;
const views = require('./route/views');
const path=require('path');


app.use(express.static(path.join(__dirname,'./frontend/build')))
app.get("*",function(req,res){
res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
})

app.use(express.json());
app.use(cors());

//for login and comment
app.use('/',router);

//this is for view count
app.use('/', views);


app.listen(PORT,()=>{
    console.log(`server started ap PORT : ${PORT}`)
})
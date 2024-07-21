// in this file i am goiung to make a server
const express=require('express');
const APirouter = require('./routes/apirouter');
const app=express();
const PORT=3000;

app.use('/api',APirouter);

app.listen(PORT,()=>{
    console.log("Our server is started at port",PORT);
})
const express=require("express");
const app=express();


app.use("/",(req,res)=>{
    res.send("i am coming from server");
})

app.listen(3000,()=>{
    console.log("i am listening on 3000");
    
})
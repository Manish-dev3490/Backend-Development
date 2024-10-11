const express=require("express");
const app=express();

app.use("/hello",(req,res)=>{
    res.send("hello ehllo helllo");
})

app.use("/hello/v1",(req,res)=>{
    res.send("hello ehllo helllo v2 vaala hooo");
})
app.use("/",(req,res)=>{
    res.send("i am coming from server");
})



app.listen(3000,()=>{
    console.log("i am listening on 3000");
    
})
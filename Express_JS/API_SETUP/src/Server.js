const express=require('express');
const dotenv=require('dotenv');
dotenv.config();

const PORT=process.env.PORT;
const app=express();

console.log(process.env.PORT);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})
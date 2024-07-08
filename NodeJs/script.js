const fs = require('node:fs');
fs.writeFile("hello.txt","hello bhaiyo kese ho",(err)=>{
    if(err) console.log("you got a error");
    else console.log("done with your file");
})


fs.appendFile("hello.txt","me toh thk hu",(err)=>{
    if(err) console.log("you got a error");
    else console.log("done with your append file");
})


// fs.rename("hello.txt","hi.txt",(err)=>{
//     if(err) console.log("you got a error");
//     else console.log("done with your file");
// })


fs.readFile("hello.txt",(err)=>{
    if(err) console.log("you have got an error");
    else console.log("reading my file");
})
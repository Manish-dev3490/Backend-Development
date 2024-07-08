const http =require('http');

const server=http.createServer((req,res)=>{
    console.log("New Connection is established ");
})

server.listen(3000,()=>{
    console.log("Server is running at PORT 3000");
})
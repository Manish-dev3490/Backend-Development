const net =require('net');

const server=net.createServer((socket)=>{
    socket.on('data',(clientdata)=>{
        console.log("Data is coming from client side is ",clientdata.toString());
        socket.write("I am server how are you client");
    })

});

server.listen(8080,()=>{
    console.log("Server is listening on the PORT 8080");
})
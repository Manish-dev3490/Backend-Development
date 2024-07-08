const net=require('net');

const client_connection=net.createConnection({port:8080},()=>{
    console.log("Client is connecrted with the server");
    client_connection.write("Hello from the client side");

})

client_connection.on('data',(serverdata)=>{
    console.log("The data is cominh from server is ",serverdata);
})
const express = require('express');

// This is our port number
const PORT = 3000;

// Our Server is created behind the scene it is using http.createServer((req, res)=>{}) for http and tcp it is using net.createServer(()=>{})
const APP = express();

APP.get('/home', (req, res) => {
    res.send("hello world");
});

APP.listen(PORT, () => {
    console.log("Server is listening on port 3000");
});

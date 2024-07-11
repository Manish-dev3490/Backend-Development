const express = require('express');

// This is our port number
const PORT = 3000;

// Our Server is created behind the scene it is using http.createServer((req, res)=>{}) for http and tcp it is using net.createServer(()=>{})
const APP = express();

// Initializinf middlewares 
function m1(req, res, next) {
    console.log("Inside middleware 1");
    next();
}

function m2(req, res, next) {
    console.log("Inside middleware 2");
    next();
}

APP.get('/home', m2,m1, (req, res) => {
    console.log("Api has treturned the response");
    res.send("hello world");
});

APP.listen(PORT, () => {
    console.log("Server is listening on port 3000");
});

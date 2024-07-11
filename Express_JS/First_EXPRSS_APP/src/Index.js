const express = require("express");
const bodyparser = require("body-parser");

// This is our port number
const PORT = 3000;

// Our Server is created behind the scene it is using http.createServer((req, res)=>{}) for http and tcp it is using net.createServer(()=>{})
const APP = express();
APP.use(bodyparser.json());

// Initializinf middlewares
function m1(req, res, next) {
  console.log("Inside middleware 1");
  next();
}

function m2(req, res, next) {
  console.log("Inside middleware 2");
  next();
}

APP.get("/home", m1, m2, (req, res) => {
  console.log("Api has treturned the response");
  res.send("hello world");
});

APP.post("/product", (req, res) => {
  res.send("post request created");
  console.log(req.body);
});

APP.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});

const express=require('express');
const ApiController = require('../controllers/ApiController');
const APirouter=express.Router();

 APirouter.get("/api/v1/products/1",ApiController);
APirouter.get("/api/v1/products/2",ApiController);
APirouter.get("/api/v1/products/3",ApiController);
APirouter.get("/api/v1/products/4",ApiController);


module.exports=APirouter;
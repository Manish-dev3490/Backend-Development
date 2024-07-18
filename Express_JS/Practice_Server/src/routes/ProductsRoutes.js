const express=require('express');
const ProductsController = require('../controllers/ProductsController');
const Productsrouter=express.Router();

 Productsrouter.get("/api/v1/categories/1",ProductsController);
Productsrouter.get("/api/v1/categories/2",ProductsController);
Productsrouter.get("/api/v1/categories/3",ProductsController);
Productsrouter.get("/api/v1/categories/4",ProductsController);


module.exports=Productsrouter;
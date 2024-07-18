const express=require('express');
const HomePagePingController = require('../Controller/HomePageController');
const AboutPagePingController = require('../Controller/AboutPageController');

const customrouter=express.Router();

customrouter.get("/homepage",HomePagePingController);
customrouter.get("/aboutpage",AboutPagePingController);

module.exports=customrouter;
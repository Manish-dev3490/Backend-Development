const express=require('express');
const HomePingController = require('../Controller/HomeController');
const AboutPingController = require('../Controller/ABoutController');
const router=express.Router();

router.get("/home",HomePingController);
router.get("/about",AboutPingController);

module.exports=router;
const express = require('express');
const dotenv = require('dotenv');
const HomePingController = require('./Controller/HomeController');
dotenv.config();

const PORT = 3000;
const app = express();

app.get('/home', HomePingController)

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
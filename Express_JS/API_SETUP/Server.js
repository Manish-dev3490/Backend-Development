require('dotenv').config();

const express = require('express');
const router = require('./src/routes');
const customrouter = require('./src/routes/custom');
const PORT = require('./src/config');
const app = express();






app.use(router);
app.use(customrouter);


app.listen(PORT, () => {

    console.log(`Server is running at ${PORT}`,);
})
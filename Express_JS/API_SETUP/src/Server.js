const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes');
const customrouter = require('./routes/custom');
dotenv.config();
const app = express();


const PORT = 3000;

app.use(router);
app.use(customrouter);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
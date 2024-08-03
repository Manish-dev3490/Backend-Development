const express = require('express');
const dotenv=require('dotenv');
dotenv.config();
const router = require('./routes');
const customrouter = require('./routes/custom');
const app = express();


const PORT = 3000;;




app.use(router);
app.use(customrouter);

app.listen(PORT, () => {
    console.log(process.env.NAME);
    
    console.log(`Server is running at ${PORT}`,);
})
require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

console.log(`Server running on port ${port}`);
console.log(`Database host: ${dbHost}`);
console.log(`Database user: ${dbUser}`);
console.log(`Database password: ${dbPass}`);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

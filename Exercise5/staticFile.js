const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.use('/', (req, res, next) => {
    res.send('This is the home page');
});

app.listen(port, () => 
    console.log(`Server running at https://localhost:${port}`)
);
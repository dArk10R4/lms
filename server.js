const express = require('express');
const http = require('http');   
const app = express(); 


app.get('/', function (req, res) {
   console.log('Hello World!');
    res.send('Hello World!');
});

http.createServer(app).listen(3000, function () {
    console.log('Listening on port 3000');
});
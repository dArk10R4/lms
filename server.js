const express = require('express');
const http = require('http');   
const app = express(); 

app.use(express.json());

app.get('/', function (req, res) {
   console.log('Hello World!');
    res.send('Hello World!');
});

app.post('/', function(req, res) {
    console.log(req.body);
    res.status(200).send();
});

const port = 443;

http.createServer(app).listen(port, function () {
    console.log('Listening on port ' + port);
});
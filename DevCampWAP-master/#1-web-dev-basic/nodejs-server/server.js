/*var http = require('http');

http.createServer(function(request, response){
    response.write('Hello World!');
    response.end();
    console.log('Server is running');
}).listen(8080);*/

var express = require('express');
var app = express();
var chalk = require('chalk'); //console.log 컬러 : npm i chalk --save

app.get('/',function(request, response){
    response.send('Hello World from Express');
});
app.listen(8080,function(){
    //console.log('Express server is running');
    console.log(chalk.blue('Express server is running'));
});

/*
var bodyParser = require('body‐parser');
// create application/json parser
var jsonParser = bodyParser.json();
// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body);
})*/
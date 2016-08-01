var express = require("express");
var path = require('path');
var app = express();

app.use(express.static(__dirname));

var server = require("http").createServer(app);

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '/views', 'index.html'));
});

server.listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

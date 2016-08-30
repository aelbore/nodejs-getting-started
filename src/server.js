var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendfile('public/index.html');
});

server.listen(3000, 'localhost');
server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
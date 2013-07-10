var express = require('express');
var fs = require('fs');
var buf = new Buffer(fs.readFileSync('index.html'),'utf-8');


var app = express.createServer(express.logger());
var str = buf.toString();
app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

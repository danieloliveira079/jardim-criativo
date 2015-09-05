var express = require('express');
var app = express();

app.use("/", express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 8081;

var server = app.listen(port, function () {

  var host = server.address().address;

  console.log('Listening at http://%s:%s', host, port);
});

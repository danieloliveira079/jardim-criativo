var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/", express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/subscribe', function (req, res) {
  var email = req.body.emailSubscribe;
  console.log(email);
});

var port = process.env.PORT || 8082;

var server = app.listen(port, function () {

  var host = server.address().address;

  console.log('Listening at http://%s:%s', host, port);
});

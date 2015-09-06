var express = require('express');
var fs = require('fs');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/", express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/subscriptions', function (req, res) {
  fs.readdir(__dirname + "/subscriptions/", function(err, files){
    if (err) {
      return console.log(err);
    }

    res.send(files);
  });
});

app.post('/subscribe', function (req, res) {
  var email = req.body.emailSubscribe;
  console.log(email);

  fs.writeFile(__dirname + "/subscriptions/" + email , email, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });

  res.send("Subscription Accepted");
});

var port = process.env.PORT || 8082;

var server = app.listen(port, function () {

  var host = server.address().address;

  console.log('Listening at http://%s:%s', host, port);
});

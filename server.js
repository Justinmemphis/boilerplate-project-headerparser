// server.js
// where your node app starts

/*
To Do:

*/

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// enable bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...
/*
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
*/

app.get("/api/whoami", function (req, res, next) {
  var ips = req.ips;
  if (ips.substr(0,7) == "::ffff:") {
    ip = ips.substr(7)
  };
  console.log("ip", ips)
  res.json({ipaddress: ips})
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

/* var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
}); */


// -----------------------************************----------------------------------------------------------------------------

var express = require("express");
const https = require('https');
// var mongoose = require("mongoose");
var Flights =  require('./apis/flights/flights.model');
var flightController = require('./apis/flights/flights.controller');
var app = express();
var port = 3000;
 
// mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/wanderLust_Demo");

/* var flightSchema = new mongoose.Schema({
  CountryId: String,
  CountryName: String,
  Direct: Boolean,
  DirectPrice: Number,
  Id: String,
  ImageUrl: String,
  Name: String,
}); */

// var Flights = mongoose.model("Flights", flightSchema);

var MongoClient = require('mongodb').MongoClient, format = require('util').format;
MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
  if (err) {
    console.log('Error Occurred!!', err);
    throw err;
  } else {
    console.log('connected!!!!');
  }
  db.close();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
  /* const apiKey = 'f7ff554d4fea4d8bb81c1412da50bb60';
  https.get(`http://partners.api.skyscanner.net/apiservices/geo/v1.0?apiKey=${apiKey}`, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
    });

  }).on("error", (err) => {
  console.log("Error: " + err.message);
}); */
});

app.get('/flights',
    isAuthenticated,
    flightController.getFlightInfo);

/* app.post("/addFlights", (req, res) => {
  var myData = new User(req.body);
  myData.save()
  .then(item => {
  res.send("item saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
}); */
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

// ----------------------*************---------------------

/* const https = require('https');

https.get('https://www.skyscanner.com.sg/g/browseservice/dataservices/browse/v3/bvweb/SG/SGD/en-GB/destinations/SIN/anywhere/2018-10-08/2018-10-15/?profile=minimalcityrollupwithnamesv2&include=image&apikey=f7ff554d4fea4d8bb81c1412da50bb60', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
}); */
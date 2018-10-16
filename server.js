/* var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
}); */

var express = require("express");
const https = require('https');
var mongoose = require("mongoose");
var app = express();
var port = 3000;
 
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/wanderLust_Demo");

var flightSchema = new mongoose.Schema({
  CountryId: String,
  CountryName: String,
  Direct: Boolean,
  DirectPrice: Number,
  Id: String,
  ImageUrl: String,
  Name: String,
});

var Flights = mongoose.model("Flights", flightSchema);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
  https.get('https://www.skyscanner.com.sg/g/browseservice/dataservices/browse/v3/bvweb/SG/SGD/en-GB/destinations/SIN/anywhere/2018-10-08/2018-10-15/?profile=minimalcityrollupwithnamesv2&include=image&apikey=8aa374f4e28e4664bf268f850f767535', (resp) => {
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
});
});

app.post("/addFlights", (req, res) => {
  var myData = new User(req.body);
  myData.save()
  .then(item => {
  res.send("item saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
});
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

// ----------------------*************---------------------

/* const https = require('https');

https.get('https://www.skyscanner.com.sg/g/browseservice/dataservices/browse/v3/bvweb/SG/SGD/en-GB/destinations/SIN/anywhere/2018-10-08/2018-10-15/?profile=minimalcityrollupwithnamesv2&include=image&apikey=8aa374f4e28e4664bf268f850f767535', (resp) => {
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
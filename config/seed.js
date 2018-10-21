const https = require('https');

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
});
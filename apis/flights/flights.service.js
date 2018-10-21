var Flights = require('./flights.model');

//==========================********   for fetching flights  **************==========================

exports.findFlights = function(cb) {

    Flights.find( , function (err, data) {
        if (err) {
            console.log('flights not found---',err);
        }
        else {
            cb(data);

        }
    })

}

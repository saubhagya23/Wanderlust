var flightService = require('./flights.service');

exports.getFlightInfo = function(req,res,next){
    var flightData = req.flight;

    flightService.getFlightsInfo(flightData,res);
}

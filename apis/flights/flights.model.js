var mongoose = require('mongoose');

require('./../../config/dataSource.js');

var flightSchema = new mongoose.Schema({
    CountryId: {
        type: String
    },
    CountryName: {
        type: String
    },
    Direct: {
        type: Boolean
    },
    DirectPrice: {
        type: Number
    },
    Id: {
        type: String
    },
    ImageUrl: {
        type: String
    },
    Name: {
        type: String
    },
}, {timestamps: true});

FlightModel = mongoose.model('Flights',flightSchema);

module.exports =  FlightModel;
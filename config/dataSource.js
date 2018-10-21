var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/travelDemo1', {});
mongoose.connection.on('open', function(){
    console.log('connection to travelDemo1 database established.');
    require('./seed');
});
mongoose.connection.on('error', function(err) {
    console.error('[Mongoose][connection] error: ' + err);
    process.exit(-1);
});
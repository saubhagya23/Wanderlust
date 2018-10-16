var appRouter = function(app) {
    app.get("/", function(req, res) {
        const fetchFlghtsData = 'https://www.skyscanner.com.sg/transport/flights-from/sin/181008/181015/?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=home';
        console.log(res.json());
        res.send("Hello World");
    });
}

module.exports = appRouter;
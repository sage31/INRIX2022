const express = require('express');
const fetch = require("node-fetch");
const { response } = require('express');
const app = express();
const port = 8000;
var cors = require('cors');
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
app.set('json spaces', 2);

// to query, call: http://localhost:8000/gettoken

var theToken;
async function getToken() {
    let appId = "g2e38y2raf";
    let hashToken = "ZzJlMzh5MnJhZnw5Rjl1WTRjSm53NXNWUkF4ek5ibld4VjhDeW5lQlJnOVUxQU54YkEx";
    let url = `https://api.iq.inrix.com/auth/v1/appToken?appId=${appId}&hashToken=${hashToken}`;
    var requestOptions = {
        method: 'GET'
    };
    //Query INRIX for token
    let response = await fetch(url, requestOptions);
    let json = await response.json();
    let output = json.result.token;

    return output;
}

app.get('/findRoute', async function (req, res) {
    let address1 = "55 Stevenson St, San Francisco, CA 94105"; // reset to req.body.address
    let address2 = "301 Van Ness Ave, San Francisco, CA 94102";
    var requestOptions2 = {
        method: 'GET',
        redirect: 'follow'
    };

    var lat1;
    var long1;
    var lat2;
    var long2;
    let address1APIresponse = await fetch("http://api.positionstack.com/v1/forward?access_key=4e3d941539b6f2b16a148d4092602345&query=" + address1, requestOptions2)
    let add1result = await address1APIresponse.json()

    lat1 = add1result.data[0].latitude;
    long1 = add1result.data[0].longitude;
    //Set up URL to query

    let address2APIresponse = await fetch("http://api.positionstack.com/v1/forward?access_key=4e3d941539b6f2b16a148d4092602345&query=" + address2, requestOptions2)
    let add2result = await address2APIresponse.json();

    lat2 = add2result.data[0].latitude;
    long2 = add2result.data[0].longitude;

    let url = `https://api.iq.inrix.com/findRoute?wp_1=${lat1}%2C${long1}&wp_2=${lat2}%2C${long2}&maxAlternates=2&format=json`
    //Set up query method


    var requestOptions = {
        method: 'GET',
        headers: {"Authorization": "Bearer " + theToken},
        redirect: 'follow'
    };

    //Query INRIX for token
    let response = await fetch(url, requestOptions);
    let json = await response.json();
    let output = json.result;


    res.json({
        route1: await getRouteGeography(output.trip.routes[0]),
        route2: await getRouteGeography(output.trip.routes[1]),
        route3: await getRouteGeography(output.trip.routes[2]),
    });

})

async function getRouteGeography(route) {

    let routeID = route.id;
    let url = `https://api.iq.inrix.com/route?routeId=${routeID}&routeOutputFields=all&incidentOutputFields=all&format=json`
    
    var requestOptions = {
        method: 'GET',
        headers: {"Authorization": "Bearer " + theToken},
        redirect: 'follow'
    };

    var coordSet;
    var incidentSet;
    let response = await fetch(url, requestOptions);
    let data = await response.json();

    coordSet = data.result.trip.routes[0].points.coordinates;
    incidentSet = data.result.incidents;
    var dangerMultiplier = 1;
    var mileage = data.result.trip.routes[0].travelTimeMinutes;
    var time = parseFloat(data.result.trip.routes[0].totalDistance);
    var basePricePerMile = 2.30; // 30 cents
    var price = basePricePerMile * mileage * dangerMultiplier;
    if (incidentSet != undefined) {
        dangerMultiplier = 0;
        incidentSet.forEach(function (incident) {
            dangerMultiplier += incident.severity;
        })
        dangerMultiplier /= mileage;
        if (dangerMultiplier >= 0.5) dangerMultiplier = 0.5;
        dangerMultiplier += 1;
    }

    result = {
        coords: coordSet,
        multiplier: dangerMultiplier,
        distance: mileage,
        tripTime: time,
        tripPrice: price,
    }
    return result;
}

//Starting server using listen function
app.listen(port, async function () {
    console.log("Server has been started at " + port);
    theToken = await getToken();
})

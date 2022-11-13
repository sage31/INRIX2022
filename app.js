const express = require('express');
const fetch = require("node-fetch");
const { response } = require('express');
const app = express();
const port = 8000;
app.set('json spaces', 2);

// to query, call: http://localhost:8000/gettoken

var theToken; 
async function getToken(){
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

    
    //Set up URL to query
    let lat1 = 37.789740;
    let long1 = -122.399350;
    let lat2 = 37.753964;
    let long2 = -122.453083;
    let url = `https://api.iq.inrix.com/findRoute?wp_1=${lat1}%2C${long1}&wp_2=${lat2}%2C${long2}&maxAlternates=2&format=json`
    //Set up query method

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + theToken);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    //Query INRIX for token
    let response = await fetch(url, requestOptions);
    let json = await response.json();
    let output = json.result;

    //Return token

    let route1 = output.trip.routes[0];
    let route2 = output.trip.routes[1];
    let route3 = output.trip.routes[2];

    res.json({
        route1: output.trip.routes[0],
        route2: output.trip.routes[1],
        route3: output.trip.routes[2],
    });

    getRouteGeography(route1,route2,route3);
    
})

function getRouteGeography(route1, route2, route3){

    let routes = [route1.id,route2.id,route3.id];
    routes.forEach(async function (routeID) {
        console.log(routeID);
        let url = `https://api.iq.inrix.com/route?routeId=${routeID}&routeOutputFields=all&incidentOutputFields=all&format=json`
        //let url = `https://api.iq.inrix.com/route?routeId=20116607&routeOutputFields=all&incidentOutputFields=all&format=json`
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + theToken);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        let response = await fetch(url, requestOptions);
        let json = await response.json();
        let output = await json.result;
        console.log(output);
    })
}

//Starting server using listen function
app.listen(port, async function () {
    console.log("Server has been started at " + port);
    theToken = await getToken();
})
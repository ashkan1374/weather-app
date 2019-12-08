const request = require('request');
let geocodeAddress = (address,callback) => {
    let apiKey = 'ffe5af1047d26af3f830abab0017751b';
    let city = address;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    request(url, function (err, response, body) {
        let weather = JSON.parse(body);
        if (err) {
            callback('Unable to connect to open weather map servers!');
        } else if (weather.cod === "404") {
            callback("city not found!");
        } else if (weather.cod === 200) {
            callback(undefined,{
               address:weather.name,
               latitude:weather.coord.lat,
               longitude:weather.coord.lon
            });
        }
    });
};

module.exports = {
    geocodeAddress
};
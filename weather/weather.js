const request = require('request');

let getWeather = (argv, callback) => {
    let apiKey = '5add61aa023a9daa2aac7f60bb4e2e6b';
    let latitude = argv.latitude;
    let longitude = argv.longitude;
    let url = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;
    request({
        url: url,
        json: true
    }, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather!');
        }
    });
};

module.exports = {
    getWeather
};
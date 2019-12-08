const request = require('request');
let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let apiKey = 'ffe5af1047d26af3f830abab0017751b';
        let city = address;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        request(url, function (err, response, body) {
            let weather = JSON.parse(body);
            if (err) {
                reject('Unable to connect to open weather map servers!');
            } else if (weather.cod === "404") {
                reject("city not found!");
            } else if (weather.cod === 200) {
                resolve({
                    address:weather.name,
                    latitude:weather.coord.lat,
                    longitude:weather.coord.lon
                });
            }
        });
    });
};

geocodeAddress('tehran').then((location)=>{
   console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log(errorMessage);
});
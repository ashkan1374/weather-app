const yargs = require('yargs');

const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
    if (errorMessage){
        console.log(errorMessage);
    }else {
        console.log(`Address is ${results.address} in coordinate : (${results.latitude},${results.longitude}) =>`);
        weather.getWeather(results,(errMessage,weatherResult)=>{
            if (errMessage){
                console.log(errMessage);
            }else {
                console.log(`It's currently ${weatherResult.temperature} , It feels like ${weatherResult.apparentTemperature}`);
            }
        })
    }
});
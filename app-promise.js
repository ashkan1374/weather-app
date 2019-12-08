const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help().alias('help', 'h').argv;

let apiKey = 'ffe5af1047d26af3f830abab0017751b';
let city = argv.address;
let geocodeUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(geocodeUrl).then((response)=>{
   if(response.data.cod !==200){
       throw new Error('Unable to find  that address!');
   }
    //console.log(response.data);
    let lat=response.data.coord.lat;
    let lon=response.data.coord.lon;
    let apiKeyW = '5add61aa023a9daa2aac7f60bb4e2e6b';
    let weatherUrl = `https://api.darksky.net/forecast/${apiKeyW}/${lat},${lon}`;
    return axios.get(weatherUrl);
}).then((response)=>{
    let tempreture = response.data.currently.temperature;
    let apparentTemperature=response.data.currently.apparentTemperature;
    console.log(`It's currently ${tempreture}. It feels like ${apparentTemperature}.`);
}).catch((e)=> {
    if (e) {
        console.log('Unable to connect to open weather map servers!');
    }
});
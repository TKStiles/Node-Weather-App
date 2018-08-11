const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias:'address',
      describe: 'Address to provide weather for',
      String: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   } else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

//lat, long, callback
weather.getWeather(39.768403, -86.158068, (errorMessage, weatherResults) =>{
  if(errorMessage){
    console.log(errorMessage);
  } else{
    console.log(JSON.stringify(weatherResults, undefined, 2));
  }
});

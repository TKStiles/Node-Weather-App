const request = require('request');

var getWeather =  (lat, lng, callback) => {
  var coordURI = `${lat},${lng}`;
  url = `https://api.darksky.net/forecast/070176996d74c4988108c29900740101/${coordURI}`;

  request({
    url: url,
    json: true
  },
  (error, response, body) => {
    if(!error && response.statusCode === 200){
      //returns values to the parameters used in the callback. In this case errorMessage = string and results = null
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else {
      //returns values to the parameters used in the callback. In this case errorMessage = string and results = null
      callback("Unable to fetch weather");
    }
  })
}

module.exports.getWeather = getWeather;

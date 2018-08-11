const request = require('request');

var geocodeAddress = (rawAddress, callback) => {

  var encodedAddress = encodeURIComponent(rawAddress);
  var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress;

  console.log(encodedAddress);
  request(
    {
    url: geocodeURL,
    json: true
  },
  (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));

    if(error){
      callback("Unable to connect to Google servers.");
    }
    else if(body.status === "ZERO_RESULTS"){
      callback("Unable to find this address");
    }
    else if(body.status === "OK"){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      } );
    }

  })


};



module.exports.geocodeAddress = geocodeAddress;
//070176996d74c4988108c29900740101

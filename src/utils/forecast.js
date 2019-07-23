const request = require("request");

const forecast = (lattitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/c369d6cf3852faec4a3db6128422f86a/${lattitude},${longitude}?units=si`;

  request({url, json: true}, (error, {body})=>{
    if(error){
      callback("unable to connect to weather service!", undefined)
    } else if(body.error){
        callback(body.error, undefined);
    } else{
        callback(
          undefined,
          body.daily.data[0].summary +
            " It is currently " +
            body.currently.temperature +
            " degress out. This high today is " +
            body.daily.data[0].temperatureHigh +
            " with a low of " +
            body.daily.data[0].temperatureLow +
            ". There is a " +
            body.currently.precipProbability +
            "% chance of rain."
        );
    }
  })
}

module.exports = forecast
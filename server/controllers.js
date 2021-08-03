const axios = require('axios');
const { getWeatherData } = require('./apiFetcher.js');
const URL = `https://api.openweathermap.org/data/2.5/onecall`

module.exports.getDailyForecast = (req, res) => {
  const params = {
    lat: 15.6287,
    lon: 120.436798,
    exclude: 'minutely,hourly,alerts',
    appid: process.env.OPEN_WEATHER_KEY
  }

  getWeatherData(URL, params)
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

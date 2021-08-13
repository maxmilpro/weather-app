const axios = require('axios');
const { getWeatherData } = require('./apiFetcher.js');
const URL = `https://api.openweathermap.org/data/2.5/onecall`

module.exports.getDailyForecast = (req, res) => {
  const params = {
    lat: 37.7749,
    lon: -122.4194,
    units: 'imperial',
    exclude: 'minutely,hourly,alerts',
    appid: process.env.OPEN_WEATHER_KEY
  }

  getWeatherData(URL, params)
    .then(result => res.send(generateFiveDayForecast(result.daily)))
    .catch(err => res.send(err));
};

const generateFiveDayForecast = (data) => {
  const forecasts = data.map((day) => {
    const [ dayOfWeek, date ] = parseTimestamp(day.dt);

    return {
      dayOfWeek,
      date,
      temperature: day.temp.day,
      main: day.weather[0].main,
      description: day.weather[0].description
    }
  });

  return forecasts.slice(0, 5);
};

const parseTimestamp = (timestamp) => {
  const dateString = new Date(timestamp * 1000).toDateString();
  return dateString.split(/(?<=^\S+)\s/);
};

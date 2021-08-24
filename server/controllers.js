const axios = require('axios');
const { getWeatherData } = require('./apiFetcher.js');
const URL = `https://api.openweathermap.org/data/2.5/onecall`

module.exports.getDailyForecast = (req, res) => {
  const placeId = req.params.placeId;

  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=${process.env.GOOGLE_API_KEY}`,
    headers: { }
  };

  axios(config)
    .then(function (response) {
      const { lat, lng } = response.data.result.geometry.location;
      const params = {
        lat: lat,
        lon: lng,
        units: 'imperial',
        exclude: 'minutely,hourly,alerts',
        appid: process.env.OPEN_WEATHER_KEY
      }
      return getWeatherData(URL, params)
    })
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

module.exports.getLocations = (req, res) => {
  const input = req.params.text;

  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&components=country:us&types=(cities)&key=${process.env.GOOGLE_API_KEY}`,
    headers: { }
  };

  axios(config)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(error);
  });
};

const axios = require('axios');

module.exports.getWeatherData = async (URL, params) => {
  try {
    const result = await axios.get(URL, { params });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

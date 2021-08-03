require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
  try {
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=1689969&appid=${process.env.OPEN_WEATHER_KEY}`);
    res.send(result.data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Weather app listening at http://localhost:${port}`);
});

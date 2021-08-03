require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { getDailyForecast } = require('./controllers.js');

app.use(express.static('public'));

app.get('/dailyForecast', getDailyForecast);

app.listen(port, () => {
  console.log(`Weather app listening at http://localhost:${port}`);
});

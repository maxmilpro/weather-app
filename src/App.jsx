import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FiveDayForecast from './components/FiveDayForecast.jsx';

const App = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = () => {
      axios.get('/dailyForecast')
        .then(result => setForecast(result.data))
        .catch(err => console.log(err));
    }

    fetchForecast();
  }, []);

  return (
    <>
      <h1>Weather App</h1>
      <FiveDayForecast forecast={forecast}/>
    </>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));

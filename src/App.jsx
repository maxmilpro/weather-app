import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FiveDayForecast from './components/FiveDayForecast.jsx';
import { GlobalStyle, Title } from './styles/StyledApp.jsx';

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
    <div>
      <GlobalStyle/>
      <Title>5-Day Forecast</Title>
      <FiveDayForecast forecast={forecast}/>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));

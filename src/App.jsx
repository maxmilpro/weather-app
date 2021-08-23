import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar.jsx';
import FiveDayForecast from './components/FiveDayForecast.jsx';
import { GlobalStyle, Title, Location } from './styles/StyledApp.jsx';

const App = () => {
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState('San Francisco, CA');
  const [searchText, setSearchText] = useState('');
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchForecast = () => {
      axios.get('/dailyForecast')
        .then(result => setForecast(result.data))
        .catch(err => console.log(err));
    }

    fetchForecast();
  }, []);

  useEffect(() => {
    const fetchLocations = () => {
      axios.get(`/locations/${searchText}`)
        .then(result => setPredictions(result.data.predictions))
        .catch(err => console.log(err));
    }

    if (searchText.length > 0) {
      fetchLocations();
    };
  }, [searchText]);

  const clickHandler = (event) => {
    setLocation(event.target.textContent);
    setPredictions([]);
  }

  return (
    <div>
      <GlobalStyle/>
      <SearchBar setSearchText={setSearchText}/>
      {predictions.map((prediction, i) => <div key={i} onClick={clickHandler}>{prediction.description}</div>)}
      <Title>5-Day Forecast</Title>
      <Location>{location}</Location>
      <FiveDayForecast forecast={forecast}/>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));

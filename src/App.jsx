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
        .then(result => console.log(result.data))
        .catch(err => console.log(err));
    }

    if (searchText.length > 0) {
      fetchLocations();
    }
  }, [searchText]);

  return (
    <div>
      <GlobalStyle/>
      <SearchBar setSearchText={setSearchText}/>
      <Title>5-Day Forecast</Title>
      <Location>{location}</Location>
      <FiveDayForecast forecast={forecast}/>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));

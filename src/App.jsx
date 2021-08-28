import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header.jsx';
import FiveDayForecast from './components/FiveDayForecast.jsx';
import { GlobalStyle, Title, Location } from './styles/StyledApp.jsx';
import { samplePredictions, sampleForecast } from '../tests/sampleData.js';

const App = () => {
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState('San Francisco, CA, USA');
  const [id, setId] = useState('ChIJIQBpAG2ahYAR_6128GcTUEo');
  const [searchText, setSearchText] = useState('');
  const [predictions, setPredictions] = useState([]);

  // retrieve five-day forecasst data on initial render
  useEffect(() => {
    const fetchForecast = () => {
      axios.get(`/dailyForecast/${id}`)
        .then(result => setForecast(result.data))
        .catch(err => console.log(err));
    }

    // fetchForecast();
    setForecast(sampleForecast);
  }, [location, id]);

  // retrieve and set predictions based on searchText
  useEffect(() => {
    const fetchLocations = () => {
      axios.get(`/locations/${searchText}`)
        .then(result => setPredictions(result.data.predictions))
        .catch(err => console.log(err));
    }

    if (searchText.length > 0) {
      // fetchLocations();
      setPredictions(samplePredictions);
    };
  }, [searchText]);

  const clickHandler = (event) => {
    const placeId = event.target.getAttribute("place-id");
    setLocation(event.target.textContent);
    setId(placeId);
    setPredictions([]);
  }

  return (
    <div>
      <GlobalStyle/>
      <Header setSearchText={setSearchText}/>
      {predictions.map((prediction, i) => <div key={i} place-id={prediction.place_id} onClick={clickHandler}>{prediction.description}</div>)}
      <Title>5-Day Forecast</Title>
      <Location>{location}</Location>
      <FiveDayForecast forecast={forecast}/>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));

import React from 'react';
import DayForecast from './DayForecast.jsx';
import { StyledFiveDayForecast } from '../styles/StyledFiveDayForecast.jsx';

const FiveDayForecast = ({ forecast }) => {
  return (
    <StyledFiveDayForecast>
      {forecast.map((day, i) => <DayForecast key={i} day={day}/>)}
    </StyledFiveDayForecast>
  )
};

export default FiveDayForecast;

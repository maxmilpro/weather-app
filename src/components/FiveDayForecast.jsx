import React from 'react';
import DayForecast from './DayForecast.jsx';

const FiveDayForecast = ({ forecast }) => {
  return (
    <>
      {forecast.map((day, i) => <DayForecast key={i} day={day}/>)}
    </>
  )
};

export default FiveDayForecast;

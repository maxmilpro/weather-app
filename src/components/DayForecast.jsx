import React from 'react';
import { StyledDayForecast } from '../styles/StyledDayForecast.jsx';

const DayForecast = ({ day }) => {
  return (
    <StyledDayForecast>
      <h2>{day.dayOfWeek}</h2>
      <h3>{day.date}</h3>
      <h3>{day.temperature}</h3>
      <h3>{day.description}</h3>
    </StyledDayForecast>
  )
};

export default DayForecast;

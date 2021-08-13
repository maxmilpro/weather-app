import React from 'react';
import { CloudLightningRain, CloudDrizzle, CloudRain, CloudSnow, Sun, Cloud } from '@styled-icons/bootstrap';
import { StyledDayForecast } from '../styles/StyledDayForecast.jsx';

const iconMap = {
  Thunderstorm: <CloudLightningRain size='48'/>,
  Drizzle: <CloudDrizzle size='48'/>,
  Rain: <CloudRain size='48'/>,
  Snow: <CloudSnow size='48'/>,
  Clear: <Sun size='48'/>,
  Clouds: <Cloud size='48'/>
}

const DayForecast = ({ day }) => {
  return (
    <StyledDayForecast>
      <h2>{day.dayOfWeek}</h2>
      <h3>{day.date}</h3>
      <h3>{Math.round(day.temperature)}°F</h3>
      {iconMap[day.main]}
      <h3>{day.description}</h3>
    </StyledDayForecast>
  )
};

export default DayForecast;

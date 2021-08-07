import React from 'react';

const DayForecast = ({ day }) => {
  return (
    <>
      <h2>{day.dayOfWeek}</h2>
      <h3>{day.date}</h3>
      <h3>{day.temperature}</h3>
      <h3>{day.description}</h3>
    </>
  )
};

export default DayForecast;
// import React from 'react';
import backgroundChange from './ChangeBg';

function BackgroundQuery(setBackground, weather) {
  const date = new Date();
  const month = date.getMonth();

  let season;
  if (month === 11 || month === 12 || month === 1) {
    season = 'winter';
  } else if (month === 2 || month === 3 || month === 4) {
    season = 'spring';
  } else if (month === 5 || month === 6 || month === 7) {
    season = 'summer';
  } else if (month === 8 || month === 9 || month === 10) {
    season = 'outumn';
  }

  const hours = date.getHours();
  let dayPart;
  if (hours > 4 && hours < 10) {
    dayPart = 'morning';
  } else if (hours > 10 && hours < 16) {
    dayPart = 'day';
  } else if (hours > 16 && hours < 21) {
    dayPart = 'evening';
  } else {
    dayPart = 'night';
  }
  const request = `${season},${dayPart},${weather.toLowerCase()}`;

  backgroundChange(request, setBackground);
}

export default BackgroundQuery;
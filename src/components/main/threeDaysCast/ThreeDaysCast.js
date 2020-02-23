import React from 'react';
import PropTypes from 'prop-types';

function ThreeDaysCast({icon1, icon2, icon3, weath1, weath2, weath3, lang}) {
  let locale;

  lang === 'ru' ? locale = lang : locale = 'en-US'; 

  const options = {
    weekday: 'long',
  };

  const today = new Date();
  const date1 = new Date(today)
  date1.setDate(date1.getDate() + 1)
  const date2 = new Date(today)
  date2.setDate(date2.getDate() + 2)
  const date3 = new Date(today)
  date3.setDate(date3.getDate() + 3)

  return (
    <div className='main__weather__three-days-forecast'>
      <div className='main__weather__three-days-forecasts forecast__first'>
        {date1.toLocaleString(locale, options) + ': ' + parseInt(weath1)}&#176;C
        <img src={icon1} alt='' className='main__weather__three-days-forecast--icons'></img>
      </div>
      <div className='main__weather__three-days-forecasts forecast__first'>
        {date2.toLocaleString(locale, options) + ': ' + parseInt(weath2)}&#176;C
        <img src={icon2} alt='' className='main__weather__three-days-forecast--icons'></img>
      </div>
      <div className='main__weather__three-days-forecasts forecast__first'>
        {date3.toLocaleString(locale, options) + ': ' + parseInt(weath3)}&#176;C
        <img src={icon3} alt='' className='main__weather__three-days-forecast--icons'></img>
      </div>
    </div>
  )
}

ThreeDaysCast.propTypes = {
  icon1: PropTypes.string,
  icon2: PropTypes.string,
  icon3: PropTypes.string,
  weath1: PropTypes.number,
  weath2: PropTypes.number,
  weath3: PropTypes.number,
  lang: PropTypes.string,
};

export default ThreeDaysCast;
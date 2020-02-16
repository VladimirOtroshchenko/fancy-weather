import React from 'react';
import PropTypes from 'prop-types';

function Weather({currentTemperature, description, feelsLike, wind, humidity}) {
  return (
    <div className='main__weather__current-weather'>
      <div className='main__weather__current-weather--temperature'>
        {currentTemperature}
      </div>
      <div className='main__weather__current-weather--description'>
        {description} <br/>
        feels like: {feelsLike} C<br/>
        wind: {wind} m/s<br/>
        humidity: {humidity}%<br/>
      </div>
    </div>
  )
}

Weather.propTypes = {
  currentTemperature: PropTypes.number,
  description: PropTypes.string,
  feelsLike: PropTypes.number,
  wind: PropTypes.number,
  humidity: PropTypes.number,
};

export default Weather;
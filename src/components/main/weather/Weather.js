import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

function Weather({currentTemperature, description, feelsLike, wind, humidity, icon}) {
  const { t } = useTranslation();
  return (
    <div className='main__weather__current-weather'>
      <div className='main__weather__current-weather--temperature'>
        {currentTemperature}&#176;C
      </div>
      <img src={icon} alt='' className='main__weather--icon'></img>
      <div className='main__weather__current-weather--description'>
        {t(description)} <br/>
        {t('feelsLike')}: {feelsLike}&#176;C<br/>
        {t('wind')}: {wind} m/s<br/>
        {t('humidity')}: {humidity}%<br/>
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
  icon: PropTypes.string,
};

export default Weather;
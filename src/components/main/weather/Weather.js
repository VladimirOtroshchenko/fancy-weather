import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

function Weather({curWeatherData, lang}) {
  const [currentTemperature, description, feelsLike, wind, humidity, icon] = curWeatherData;
  const [translated, setTranslated] = useState();
  const { t } = useTranslation();
  
  const base = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
  const key = 'trnsl.1.1.20191211T100043Z.f28e54dd21cc3746.26b14ae4b59118f007ce0115846929dbe82da4ee';
  const text = description;
  const format = 'html';

  const urlCoords = `${base}key=${key}&text=${text}&lang=${lang}&format=${format}`;

  fetch(urlCoords)
   .then(response => response.json())
   .then(el => setTranslated(el.text[0]));

   return (
    <div className='main__weather__current-weather'>
      <div className='main__weather__current-weather--temperature'>
        {currentTemperature}&#176;C
      </div>
      <img src={icon} alt='' className='main__weather--icon'></img>
      {translated ? (
        <div className='main__weather__current-weather--description'>
          {translated} <br/>
          {t('feelsLike')}: {feelsLike}&#176;C <br/>
          {t('wind')}: {wind} {t('ms')} <br/>
          {t('humidity')}: {humidity}% <br/>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

Weather.propTypes = {
  curWeatherData: PropTypes.array,
  lang: PropTypes.string,
};

export default Weather;
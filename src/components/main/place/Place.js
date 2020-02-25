import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Place = ({city, country, lang}) => {
  console.log('place');
  const [translated, setTranslated] = useState();

  const base = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
  const key = 'trnsl.1.1.20191211T100043Z.f28e54dd21cc3746.26b14ae4b59118f007ce0115846929dbe82da4ee';
  const text = `${city}, ${country}`;
  const format = 'html';

  const urlCoords = `${base}key=${key}&text=${text}&lang=${lang}&format=${format}`;

  fetch(urlCoords)
   .then(response => response.json())
   .then(el => el.text[0].length > 1 ? setTranslated(el.text[0]) : null);

  if (!translated) {
    return <div>loading...</div>
  }

  return (
    <div className='main__weather__place'>
      {translated}
    </div>
  )
}

Place.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  lang: PropTypes.string,
};

export default Place;
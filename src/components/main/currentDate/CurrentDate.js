import React from 'react';
import PropTypes from 'prop-types';

function CurrentDate({ lang }) {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  let locale;
  lang === 'ru' ? locale = lang : locale = 'en-US'; 
  
  const date = new Date().toLocaleString(locale, options);

  return (
    <div className='main__weather__date'>
      {date}
    </div>
  )
}

CurrentDate.propTypes = {
  lang: PropTypes.string
};

export default CurrentDate;
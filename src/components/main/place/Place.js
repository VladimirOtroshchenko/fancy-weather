import React from 'react';
import PropTypes from 'prop-types';

function Place({city, country}) {
  return (
    <div className='main__weather__place'>
      {city}, {country}
    </div>
  )
}

Place.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

export default Place;
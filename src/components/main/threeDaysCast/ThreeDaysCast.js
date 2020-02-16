import React from 'react';
import PropTypes from 'prop-types';

function ThreeDaysCast({date}) {
  return (
    <div className='main__weather__three-days-forecast'>
      <div className='main__weather__three-days-forecast__first'>
        {date}
      </div>
      <div className='main__weather__three-days-forecast__second'>
        {date}
      </div>
      <div className='main__weather__three-days-forecast__third'>
        {date}
      </div>
    </div>
  )
}

ThreeDaysCast.propTypes = {
  date: PropTypes.string
};

export default ThreeDaysCast;
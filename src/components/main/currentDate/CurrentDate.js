import React from 'react';
import PropTypes from 'prop-types';

function CurrentDate() {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  
  const date = new Date().toLocaleString('en-US', options);
  return (
    <div className='main__weather__date'>
      {date}
    </div>
  )
}

CurrentDate.propTypes = {
  date: PropTypes.string
};

export default CurrentDate;
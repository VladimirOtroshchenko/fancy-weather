import React from 'react';
import PropTypes from 'prop-types';

function CurrentDate({date}) {
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
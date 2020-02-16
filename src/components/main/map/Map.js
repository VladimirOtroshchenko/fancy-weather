import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import Mapbox from './Mapbox';

function Map() {
  return (
    <Fragment>
      <div className='main__map__coords'>
        lat <br />
        long
      </div>
      <map className='main__map--map' id='map'>
        <Mapbox />
      </map>
    </Fragment>
  )
}

// ThreeDaysCast.propTypes = {
//   date: PropTypes.string
// };

export default Map;
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Mapbox from './Mapbox';

function Map({latitude, longitude}) {
  return (
    <Fragment>
      <div className='main__map__coords'>
        lat <br />
        long
      </div>
      <map className='main__map--map' id='map'>
        <Mapbox latitude={latitude} longitude={longitude}/>
      </map>
    </Fragment>
  )
}

Map.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

export default Map;
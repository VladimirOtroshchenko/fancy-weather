import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl from 'react-mapbox-gl';

function Map({coords}) {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidWxhZHppbWlyLWF0cm9zaGNoYW5rYSIsImEiOiJjazNoZTNtNGMwYW84M21xdHhwc2hqcXZpIn0.GpqDhq5ctOG4hKxhZ_xKjg'
  });
  return (
    <Fragment>
      <div className='main__map__coords'>
        latitude: <br/>
        longitude:
      </div>
      <map className='main__map--map' id='map'>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '260px',
            width: '260px',
            borderRadius: '10px',
          }}
          center={coords}
        />
      </map>
    </Fragment>
  )
}

Map.propTypes = {
  coords: PropTypes.array,
};

export default Map;
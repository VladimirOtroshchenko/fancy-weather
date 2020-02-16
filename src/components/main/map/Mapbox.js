import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl from 'react-mapbox-gl';

function Mapbox() {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidWxhZHppbWlyLWF0cm9zaGNoYW5rYSIsImEiOiJjazNoZTNtNGMwYW84M21xdHhwc2hqcXZpIn0.GpqDhq5ctOG4hKxhZ_xKjg'
  });
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '300px',
        width: '300px'
      }}
    />
  )
}

Mapbox.propTypes = {
  date: PropTypes.object
};

export default Mapbox;
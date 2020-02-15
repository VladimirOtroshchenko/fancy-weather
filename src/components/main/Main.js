import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  state = {
    city: null,
    country: null,
    date: new Date().toDateString(),
    currentTemperature: null,
    description: null,
  }

  componentDidMount() {
    async function getData(latitude, longitude) {
      try {
        const base = 'https://api.opencagedata.com/geocode/v1/';
        const format = 'json';
        const deliver = '%2C';
        const queryParams = {
          query: `${latitude}${deliver}${longitude}`,
          key: '3f2b0bc176fa446f91d041a65ad79924',
          pretty: '1',
        };
    
        const queryString = Object.entries(queryParams)
          .map((param) => `${param[0]}=${param[1]}`)
          .join('&');
        const urlCoords = `${base}${format}?${queryString}`;
    
        const baseWeather = 'https://api.openweathermap.org/data/2.5/forecast?';
        const queryParamsWeather = {
          lat: latitude,
          lon: longitude,
          lang: 'en',
          units: 'metric',
          APPID: 'f83bb7d64b80f33101e6f599516fc20a',
        };
    
        if (localStorage.getItem('unit') === 'C') {
          queryParamsWeather.units = 'metric';
        } else if (localStorage.getItem('unit') === 'F') {
          queryParamsWeather.units = 'imperial';
        }
    
        const queryStringWeather = Object.entries(queryParamsWeather)
          .map((param) => `${param[0]}=${param[1]}`)
          .join('&');
        const urlWeather = `${baseWeather}${queryStringWeather}`;
    
        const resCity = await fetch(urlCoords);
        const parsedCity = await resCity.json();
    
        const resWeather = await fetch(urlWeather);
        const parsedWeather = await resWeather.json();
    

      } catch (err) {
        console.log('error');
      }
    }

    const optionsGeo = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    
    function success({ coords: { latitude, longitude } }) {
      getData(latitude, longitude);
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, optionsGeo);
  }

  render() {
    return (
      <div className='main'>
        <div className='main__weather'>
          <div className='main__weather__place'>
            city, country
          </div>
          <div className='main__weather__date'>
            <p>{new Date().toDateString()}</p>
          </div>
          <div className='main__weather__current-weather'>
            <div className='main__weather__current-weather--temperature'>
              current temp
            </div>
            <div className='main__weather__current-weather--description'>
              rainy <br />
              feels like <br />
              qwdqwdqd <br />
            </div>
          </div>
          <div className='main__weather__three-days-forecast'>
            <div className='main__weather__three-days-forecast__first'>
              tomorrow
            </div>
            <div className='main__weather__three-days-forecast__second'>
              tomorrow
            </div>
            <div className='main__weather__three-days-forecast__third'>
              tomorrow
            </div>
          </div>
        </div>
        <div className='main__map'>
          <div className='main__map__coords'>
            lat <br />
            long
          </div>
          <div className='main__map--map'>
          
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
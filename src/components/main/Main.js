import React, { Component } from 'react';
import './Main.scss';
import Place from './place/Place';
import CurrentDate from './currentDate/CurrentDate';
import Weather from './weather/Weather';
import ThreeDaysCast from './threeDaysCast/ThreeDaysCast';
import Map from './map/Map';
import BackgroundQuery from './background/Background';
import PropTypes from 'prop-types';

class Main extends Component {
  state = {
    latitude: null,
    longitude: null,
    city: null,
    country: null,
    // date: new Date().toLocaleString('En-US'),
    currentTemperature: null,
    description: null,
    feelsLike: null,
    wind: null,
    humidity: null,
  }

  componentDidMount() {
    const success = (pos) => {
      this.setState({latitude: pos.coords.latitude, longitude: pos.coords.longitude});
      const base = 'https://api.opencagedata.com/geocode/v1/';
      const format = 'json';
      const deliver = '%2C';
      const queryParams = {
        query: `${pos.coords.latitude}${deliver}${pos.coords.longitude}`,
        key: '3f2b0bc176fa446f91d041a65ad79924',
        pretty: '1',
      };

      const queryString = Object.entries(queryParams)
        .map((param) => `${param[0]}=${param[1]}`)
        .join('&');
      const urlCoords = `${base}${format}?${queryString}`;

      fetch(urlCoords).then(res => res.json()).then(json => {
        this.setState({
          city: json.results[0].components.city, 
          country: json.results[0].components.country,
        });
      });

      const baseWeather = 'https://api.openweathermap.org/data/2.5/forecast?';
      const queryParamsWeather = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        lang: 'en',
        units: 'metric',
        APPID: 'f83bb7d64b80f33101e6f599516fc20a',
      };

      const queryStringWeather = Object.entries(queryParamsWeather)
        .map((param) => `${param[0]}=${param[1]}`)
        .join('&');
      const urlWeather = `${baseWeather}${queryStringWeather}`;

      fetch(urlWeather).then(res => res.json()).then(json => {
        this.setState({
          currentTemperature: parseInt(json.list[0].main.temp),
          description: json.list[0].weather[0].description,
          feelsLike: parseInt(json.list[0].main.feels_like),
          wind: parseInt(json.list[0].wind.speed),
          humidity: parseInt(json.list[0].main.humidity)
        })
        BackgroundQuery(this.props.setBackground, json.list[0].weather[0].main);
      });
    }
  
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  render() {
    return (
      <div className='main'>
        <div className='main__weather'>
          <Place city={this.state.city} country={this.state.country}/>
          <CurrentDate />
          <Weather 
            currentTemperature={this.state.currentTemperature} 
            description={this.state.description}
            feelsLike={this.state.feelsLike}
            wind={this.state.wind}
            humidity={this.state.humidity}
          />
          <ThreeDaysCast date={this.state.date}/>
        </div>
        <div className='main__map'>
          <Map latitude={this.state.latitude} longitude={this.state.longitude}/>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  setBackground: PropTypes.func,
};


export default Main;
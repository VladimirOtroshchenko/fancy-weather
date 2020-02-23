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
    currentTemperature: null,
    description: null,
    feelsLike: null,
    wind: null,
    humidity: null,
    icon: null,
    icon1: null,
    icon2: null,
    icon3: null,
    weath1: null,
    weath2: null,
    weath3: null,
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
          humidity: parseInt(json.list[0].main.humidity),
          icon: json.list[0].weather[0].icon,
          icon1: json.list[8].weather[0].icon,
          icon2: json.list[16].weather[0].icon,
          icon3: json.list[24].weather[0].icon,
          weath1: json.list[8].main.temp,
          weath2: json.list[16].main.temp,
          weath3: json.list[24].main.temp,
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
    const weatherIconBaseUrl = 'http://openweathermap.org/img/wn/';
    const format = '@2x.png';
    return (
      <div className='main'>
        <div className='main__weather'>
          <Place city={this.state.city} country={this.state.country}/>
          <CurrentDate lang={this.props.lang}/>
          <Weather 
            currentTemperature={this.state.currentTemperature} 
            description={this.state.description}
            feelsLike={this.state.feelsLike}
            wind={this.state.wind}
            humidity={this.state.humidity}
            icon={weatherIconBaseUrl + this.state.icon + format}
          />
        </div>
        <ThreeDaysCast 
          icon1={weatherIconBaseUrl + this.state.icon1 + format}
          icon2={weatherIconBaseUrl + this.state.icon2 + format}
          icon3={weatherIconBaseUrl + this.state.icon3 + format}
          weath1={this.state.weath1}
          weath2={this.state.weath2}
          weath3={this.state.weath3}
          lang={this.props.lang}
        />
        <div className='main__map'>
          <Map latitude={this.state.latitude} longitude={this.state.longitude}/>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  setBackground: PropTypes.func,
  lang: PropTypes.string,
};


export default Main;
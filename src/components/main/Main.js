import React, { Component } from 'react';
import Place from './Place/Place';
import CurrentDate from './CurrentDate/CurrentDate';
import Weather from './Weather/Weather';
import ThreeDaysCast from './ThreeDaysCast/ThreeDaysCast';
import Map from './Map/Map';
import BackgroundQuery from '../../utils/background/Background';
import PropTypes from 'prop-types';

class Main extends Component {
  state = {
    coords: [],
    curWeatherData: [],
    threeDaysWeatherData: [],
  }

  async componentDidMount() {
    const success = (pos) => {
      this.setState({coords: [pos.coords.latitude, pos.coords.longitude]});
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
          curWeatherData: [
            parseInt(json.list[0].main.temp),
            json.list[0].weather[0].main,
            parseInt(json.list[0].main.feels_like),
            parseInt(json.list[0].wind.speed),
            parseInt(json.list[0].main.humidity),
            json.list[0].weather[0].icon
          ],
          threeDaysWeatherData: [
            json.list[8].weather[0].icon,
            json.list[16].weather[0].icon,
            json.list[24].weather[0].icon,
            json.list[8].main.temp,
            json.list[16].main.temp,
            json.list[24].main.temp
          ]
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
    // const weatherIconBaseUrl = 'http://openweathermap.org/img/wn/';
    // const format = '@2x.png';
    return (
      <React.Fragment>
        {this.state.city && this.state.country && (
          <div className='main'>
            <div className='main__weather'>
              <Place city={this.state.city} country={this.state.country} lang={this.props.lang} />
              <CurrentDate lang={this.props.lang}/>
              {this.state.curWeatherData.length > 1 && (
                <Weather
                  lang={this.props.lang}
                  curWeatherData={this.state.curWeatherData}
                />
              )}
            </div>
            <ThreeDaysCast 
              threeDaysWeatherData={this.state.threeDaysWeatherData}
              lang={this.props.lang}
            />
            <div className='main__map'>
              <Map coords={this.state.coords}/>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

Main.propTypes = {
  setBackground: PropTypes.func,
  lang: PropTypes.string,
};


export default Main;
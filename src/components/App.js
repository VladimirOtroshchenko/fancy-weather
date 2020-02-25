import React, { Component } from 'react';
import './App.scss';
import Header from './header/Header';
import Main from './main/Main';
import i18n from 'i18next';
// import { Spinner } from 'react-bootstrap';

class App extends Component {
  state = {
    backgroundImage: null,
    language: 'ru',
    unit: 'C',
  }

  setLanguage = () => {
    if (this.state.language === 'ru') {
      this.setState({language: 'en'})
      i18n.changeLanguage('en');
    } else {
      this.setState({language: 'ru'});
      i18n.changeLanguage('ru');
    }
  }

  setBackground = (img) => {
    this.setState({backgroundImage: img.src});
  }

  render() {
    return (
      <div className="container" style={{backgroundImage: "url(" + this.state.backgroundImage + ")"}}>
        <div className='bg-dark' />
          <div className="content">
            <Header language={this.state.language} setLanguage={this.setLanguage}/>
            <Main setBackground={this.setBackground} lang={this.state.language}/>
          </div>
      </div>
    );
  }
}

export default App;

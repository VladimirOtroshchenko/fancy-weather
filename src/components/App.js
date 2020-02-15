import React, { Component } from 'react';
import './App.scss';
import Header from './header/Header';
import Main from './main/Main';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;

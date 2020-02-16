import React, { Component } from 'react';
import './App.scss';
import Header from './header/Header';
import Main from './main/Main';

class App extends Component {
  state = {
    backgroundImage: null,
  }

  setBackground = (img) => {
    this.setState({backgroundImage: img.src});
  }

  render() {
    return (
      <div className="container" style={{backgroundImage: "url(" + this.state.backgroundImage + ")"}}>
        <div className='bg-dark'></div>
        <div className="content">
          <Header />
          <Main setBackground={this.setBackground}/>
        </div>
      </div>
    );
  }
}

export default App;

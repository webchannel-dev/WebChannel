import React, { Component } from 'react';
import logo from './assets/image/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Webchannel.dev coming soon....</p>
          <p> v-02.05.2019-21:56 </p>
        </header>
      </div>
    );
  }
}

export default App;

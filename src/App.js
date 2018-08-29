import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

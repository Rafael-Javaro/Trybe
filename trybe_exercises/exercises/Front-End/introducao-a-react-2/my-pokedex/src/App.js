import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }  
}

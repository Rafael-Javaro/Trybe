import React, { Component } from 'react';
import Card from './Card';

export default class Pokedex extends Component {
  render() {
    return (<span>{<Card />}</span>);    
  }
}
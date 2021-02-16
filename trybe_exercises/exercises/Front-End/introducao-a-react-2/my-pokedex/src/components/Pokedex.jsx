import React, { Component } from 'react';
import Card from './Card';
import data from '../data'

export default class Pokedex extends Component {
  constructor() {
    super();

    this.props = data;
  };

  render() {
    return (
      <div>
        {data.map(pokemon => <Card key={pokemon.id} image={pokemon.image} name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} />)}
      </div>
    );    
  }
}

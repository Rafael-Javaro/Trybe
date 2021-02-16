import React, { Component } from 'react';
import Card from './Card';
import pokemons from '../data';

export default class Pokedex extends Component {
  render() {
    return (
      <div>
        {pokemons.map(pokemon => <Card key={pokemon.id} image={pokemon.image} name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} />)}
      </div>
    );    
  }
}

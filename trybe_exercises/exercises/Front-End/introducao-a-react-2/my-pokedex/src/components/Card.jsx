import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
        <div className="card">
            <img alt={`${name}-card`} src={image} />
            <h2>{name}</h2>
            <h3>{type}</h3>
            <p>{`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
    );
  }
}

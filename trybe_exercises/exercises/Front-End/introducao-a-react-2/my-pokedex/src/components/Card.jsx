import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
        <div>
            <img alt={`${name}-card`} src={image} />
            <h2>{name}</h2>
            <h3>{type}</h3>
            <p>{`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
};

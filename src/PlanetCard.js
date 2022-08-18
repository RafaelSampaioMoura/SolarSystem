import React from 'react';
import Title from './Title';

class PlanetCard extends React.Component {
  render() {
    const planetName = this.props.planetName;
    return (
      <div data-testid='planet-card'>
        <p data-testid='planet-name'>
          <img src={this.props.planetImage} alt={`Planeta ${planetName}`}></img>
        </p>
      </div>
    );
  }
}

export default PlanetCard;

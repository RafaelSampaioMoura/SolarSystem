import React from 'react';
import planetas from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planetas.map((planeta) => (
          <div key={ planeta.name }>
            <PlanetCard planetImage={ planeta.image } planetName={ planeta.name } />
          </div>
        ))}
      </div>
    );
  }
}

export default SolarSystem;

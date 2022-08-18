import React from 'react';
import planetas from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid='solar-system'>
        {planetas.map((planeta) => {
          return (
            <PlanetCard key={planeta.name} planetImage={planeta.image} planetName={planeta.name} />
          );
        })}
      </div>
    );
  }
}

export default SolarSystem;

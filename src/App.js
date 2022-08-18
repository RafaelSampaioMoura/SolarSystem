import React from 'react';
import Header from './Header';
import PlanetCard from './PlanetCard';
import SolarSystem from './SolarSystem';
import Title from './Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline='Planetas' />
        <PlanetCard planetName='Saturno'/>
      </div>
    );
  }
}

export default App;

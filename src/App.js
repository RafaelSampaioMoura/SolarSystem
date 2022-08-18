import React from 'react';
import Header from './Header';
import SolarSystem from './SolarSystem';
import Title from './Title';
import Missions from './Missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Title headline='Planetas' />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;

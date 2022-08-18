import React from 'react';
import Header from './Header';
import SolarSystem from './SolarSystem';
import Missions from './Missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;

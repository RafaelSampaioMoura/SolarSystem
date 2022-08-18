import React from 'react';
import Header from './Header';
import SolarSystem from './SolarSystem';
import Title from './Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default App;

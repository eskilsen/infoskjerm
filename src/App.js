import React from 'react';
import './App.css';
import Reddit from './Reddit';
import Bikes from './Bikes';
import QOTD from './QOTD';
import Clock from './Clock';

function App() {
  return (
    
    <div className="App">
      <h1>Infoskjerm</h1>
      <Clock/>
      <Reddit/>
      <Bikes/>
      <QOTD/>
      
    </div>
  );
}

export default App;


//predeploy og deploy i package.json!!
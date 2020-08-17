import React from 'react';

import Parrafo from './components/Parrafo';
import Variables from './components/Variables';
import Events from './components/Events';
import States from './components/States';
import Count from './components/Count';
import CountList from './components/CountList';

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Parrafo />
      <Variables />
      <Events />
      <States />
      <Count />
      <CountList />
    </div>
  );
}

export default App;

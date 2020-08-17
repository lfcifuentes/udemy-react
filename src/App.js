import React from 'react';

import Parrafo from './components/Parrafo';
import Variables from './components/Variables';
import Events from './components/Events';
import States from './components/States';
import Count from './components/Count';
import CountList from './components/CountList';
import Form from './components/Form';

function App() {
  return (
    <div className="App mt-3">
      <h1>Hola mundo</h1>
      <Parrafo />
      <Variables />
      <Events />
      <States />
      <Count />
      <CountList />
      <Form />
    </div>
  );
}

export default App;

import GlobalStyles from './globalStyles';
import './App.css';
import React from 'react';
import Menu from './components/Menu/Menu'
import Contactos from './components/Contactos/Contactos';
import ParteMedio from './components/ParteMedio/ParteMedio';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Menu/>
      <ParteMedio/>
      <Contactos/>
    </div>
  );
}

export default App;

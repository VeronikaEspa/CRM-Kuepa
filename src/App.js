import GlobalStyles from './globalStyles';
import './App.css';
import React from 'react';
import Menu from './components/Menu/Menu'
import Contactos from './components/Contactos/Contactos';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Menu/>
      <Home/>
      <Contactos/>
    </div>
  );
}

export default App;

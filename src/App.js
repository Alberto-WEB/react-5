import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './componentes/Navegacion';
import Notas from './componentes/Notas';
import Inicio from './componentes/Inicio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <Navegacion />

            
            <Inicio />

            <Notas />

            <Notas />

            <Notas />


          </div>
          
      </div>
    );
  }
}

export default App;

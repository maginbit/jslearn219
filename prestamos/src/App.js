import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Formulario from './componentes/Formulario';

function App() {
  return (
   
  
    <Fragment>
        <h1>Cotizador de Prestamos</h1>
          <div className="container">
              <Formulario />  
          </div>
    </Fragment>
  );
}

export default App;

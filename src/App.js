import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Boton from './components/Boton';

function App() {
return (

  <div className='App-container'>
    <Formulario/>
    <Boton title="iniciar sesión" />
  </div>

);
};
export default App;
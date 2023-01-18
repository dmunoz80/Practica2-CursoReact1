import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Boton from './components/Boton';

function App() {

  return (

  <div className='App-container'>

    <Form className='formulario'>

        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name='nombre'/>

        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" name='password'/>

        <Boton title='iniciar sesión'/>
    
    </Form>

  </div>

);
};
export default App;
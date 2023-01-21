import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Boton from './components/Boton';
function App() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const validarDatos = (e) => {
      e.preventDefault();

  if(nombre !=='ADL'|| password !=='252525')
    {
      setError(true);
      return;
    } 
      setError(false);
      setNombre('');
      setPassword('');
    };

  return (
 
  <div className='App-container'>

    <Form className='formulario m-5' onSubmit={validarDatos}>
      {error ? <p className='bg-danger text-white text-center'>Los datos son incorrectos</p> :null}
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />

        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        
        <div className='mt-3'>{nombre !=='' && password !=='' && <Boton title='Iniciar sesión'/>}</div>

    </Form>

  </div>

);
};
export default App;
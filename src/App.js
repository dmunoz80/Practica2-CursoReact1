import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Boton from './components/Boton';

function App() {


  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  
  const validarDatos = (e) => {
      e.preventDefault();

      if( nombre ===''|| password ==='')
    {
      setError1(true);
      return;
    }  
      else if( nombre !=='ADL'|| password !=='252525')
    {
      setError2(true);
      setError1(false);
      return;
    } 
      setError2(false);
      setNombre('');
      setPassword('');
    };

  return (
 
  <div className='App-container'>

    <Form className='formulario m-5' onSubmit={validarDatos}>
      {error1 ? <p className='bg-warning text-white text-center'>Debe ingresar datos!</p> : error2 ? <p className='bg-danger text-white text-center'>Los datos son incorrectos</p> : null}
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

        <Boton title='iniciar sesión'/>
    
    </Form>

  </div>

);
};
export default App;
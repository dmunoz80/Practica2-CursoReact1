
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  return (
    <Form className='mb-3'>
        Nombre <Form.Control type="text"/>
        Contraseña <Form.Control type="password"/>
    </Form>
  );
}

export default Formulario;
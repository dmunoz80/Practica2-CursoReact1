import React from 'react';
import Button from 'react-bootstrap/Button';

const Boton = (props) => {
  const {title} = props;
  
  return (
    <Button type='submit' variant="dark">{title}</Button>
    );
  };
  
  export default Boton;
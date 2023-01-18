import React from 'react';
import Button from 'react-bootstrap/Button';

const Boton = (props) => {
  const {title} = props;
  
  return (
    <Button className='my-3' type='submit' variant="dark">{title}</Button>
    );
  };
  
  export default Boton;
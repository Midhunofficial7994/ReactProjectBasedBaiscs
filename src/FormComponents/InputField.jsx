import React from 'react';
import { Form } from 'react-bootstrap';

const InputField = ({ type, name, value, onChange, isInvalid, errorMessage, as }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
      <Form.Control
        as={as}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}  
      />
      {isInvalid && errorMessage && (
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default InputField;

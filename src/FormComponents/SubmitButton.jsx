import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitButton = ({ children }) => {
  return (
    <Button variant="primary" type="submit" style={{ width: '100%' }}>
      {children}
    </Button>
  );
};

export default SubmitButton;

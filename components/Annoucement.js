'use client';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Annoucement() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant='warning' onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Unexpected Charge?</Alert.Heading>
        <p>
          Because we build better websites. The competition is desperate.
          Someone is impersonating us and charging people amounts between $20
          and $30. If you have been charged, please contact your bank to dispute
          the charge and report the fraud.
        </p>
      </Alert>
    );
  }
  return (
    <Button variant='warning' onClick={() => setShow(true)}>
      Show Alert
    </Button>
  );
}

export default Annoucement;

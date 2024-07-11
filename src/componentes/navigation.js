import React from 'react';
import { Nav } from 'react-bootstrap';
import { useForm } from '../context/formcontext';

const Navigation = () => {
  const {step, handleSelect} = useForm();

  return (
    <Nav variant="tabs" activeKey={step.toString()} onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1">Step 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2">Step 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">Step 3</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;

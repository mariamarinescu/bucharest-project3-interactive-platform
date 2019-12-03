import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';


class SignUp extends React.Component {
    render() {
        return(
<div>
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Inregistrare</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
  <Form.Group controlId="formBasicName">
    <Form.Control type="name" placeholder="Nume complet" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
 
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
 
    <Form.Control type="password" placeholder="Confirma parola" />
  </Form.Group>
  
  <Button variant="outline-secondary">Creeaza cont</Button>
</Form>
  </Modal.Body>
</Modal.Dialog>
</div>
        )
    }
    
}

export default SignUp;
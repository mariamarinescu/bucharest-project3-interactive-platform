import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            email: '',
            password: '',
            confirmPass: ""
        }
    }

    handleSignUp(event) {
        this.setState({
            name: event.target.value,
            email: event.target.value,
            password: event.target.value,
            confirmPassword: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Inregistrare</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form >
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="name"
                                value={this.state.name} 
                                onChange={this.handleChange} 
                                placeholder="Nume complet" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" 
                                value={this.state.email} 
                                onChange={this.handleChange} 
                                placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">

                                <Form.Control type="password" 
                                value={this.state.password} 
                                onChange={this.handleChange} 
                                placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicConfirmPassword">

                                <Form.Control type="password"
                                value={this.state.confirmPass} 
                                onChange={this.handleChange} 
                                placeholder="Confirma parola" />
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
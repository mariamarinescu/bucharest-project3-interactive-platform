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
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSignUp(event) {
        this.setState({
            name: event.target.value,
            email: event.target.value,
            password: event.target.value,
            confirmPassword: event.target.value
        })
    }
    handleSubmit(event) {
       console.log(`name: ${this.state.name} and password: ${this.state.confirmPass} and email: ${this.state.email}`);
        event.preventDefault();
      }
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Inregistrare</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="name"
                                value={this.state.name} 
                               />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" 
                                value={this.state.email} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">

                                <Form.Control type="password" 
                                value={this.state.password} 
                               />
                            </Form.Group>
                            <Form.Group controlId="formBasicConfirmPassword">

                                <Form.Control type="password"
                                value={this.state.confirmPass} 
                                 
                             />
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
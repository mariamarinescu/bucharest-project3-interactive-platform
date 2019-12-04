import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './style.css'


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorEmailText: '',
            errorNameText: '',
            errorPasswordText: '',
            errorConfirmPasswordText: '',
            email: '',
            name: '',
            password: '',
            confPass: ''
        }

    }

    render() {
        return (
            <div >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Inregistrare</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <input className='input'
                                placeholder="Nume complet"
                                ref={(f) => { this.nameField = f; }}
                                type="text" />
                            {fieldNameError}

                            <input className='input'
                                placeholder="Adresa de email"
                                ref={(f) => { this.emailField = f; }}
                                type="email" />
                            {fieldEmailError}
                            <input className='input'
                                placeholder="Parola"
                                ref={(f) => { this.passwordField = f; }}
                                type="password" />
                            {fieldPasswordError}
                            <input className='input'
                                placeholder="Confirma parola"
                                ref={(f) => { this.confPasswordField = f; }}
                                type="password" />
                            {fieldConfirmPassError}
                            <div className="actionContainer">
                                <div className="button" onClick={this.login}>Login</div>
                            </div>
                        </form>

                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }

}

export default SignUp;
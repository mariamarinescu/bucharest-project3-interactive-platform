import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './style.css'
import validator from 'email-validator'
import classNames from 'classnames';


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
                    <input className={classNames("input", { ["inputError"]: this.state.errorNameText })}
                        placeholder="Your name"
                        ref={(f) => { this.nameField = f; }}
                        type="text" />
                        {fieldNameError}

                    <input className={classNames("input", { ["inputError"]: this.state.errorEmailText })}
                        placeholder="Your email"
                        ref={(f) => { this.emailField = f; }}
                        type="email" />
                    {fieldEmailError}
                    <input className={classNames("input", { ["inputError"]: this.state.errorPasswordText })}
                        placeholder="Your password"
                        ref={(f) => { this.passwordField = f; }}
                        type="password" />
                        {fieldPasswordError}
                    <input className={classNames("input", { ["inputError"]: this.state.errorConfirmPasswordText })}
                        placeholder="Confirm password"
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
import React from 'react';
import FormErrors from './FormErrors.js';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: { email: '', password: '', confirmPassword: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            confirmPasswordValid: false
        }
        
    }


    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) })
        if (this.state.password === this.state.confirmPassword && this.state.password !== '' && this.state.confirmPassword !== '') {
            this.setState({
                confirmPasswordValid: true
            })
        }

    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); //an example regex from the Devise library.
                fieldValidationErrors.email = emailValid ? '' : ' nu este valid.';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' este prea scurta.';
                break;
            case 'confirmPassword':
                confirmPasswordValid = value === this.state.password;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'nu se potrivesc.';
                break;
            default:
                break;

        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    routeChange = () => {
        let path = `/`;
        this.props.history.push(path);
      }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    render() {
        return (
            <div id="signup-form">
                <form className="">
                    <div className="form-group">
                        <input type="text" className="form-control mySignUp-input"
                            name="name" value={this.state.name}
                            placeholder="Nume complet"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control mySignUp-input"
                            name="email" value={this.state.email}
                            placeholder="Email"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control mySignUp-input"
                            name="password" value={this.state.password}
                            placeholder="Parola"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control mySignUp-input"
                            name="confirmPassword" value={this.state.confirmPassword}
                            placeholder="Confirma parola"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <Button variant="outline-dark" className="mySignUp-bttn" type="submit"
                     disabled={!this.state.formValid} onClick={this.routeChange}>
                         Creeare cont
                    </Button>
                </form>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp)


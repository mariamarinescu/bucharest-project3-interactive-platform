import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './style.css'
import validator from 'email-validator'
import classNames from 'classnames';
// import bcrypt from 'bcrypt'






class SignUp extends React.Component {
    encryptSuccess = false;
    pass;
    confirm;
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
            password_message: 'Parola trebuie sa contina minim 8 caractere: minim 1 cifra, 1 litera mica si o litera mare'
        }

    }
    // async hash(passParam) {
    //     await bcrypt.hash(passParam, 10, (err, hash) => {
    //         if (err) {
    //             console.error(err)
    //             return
    //         }
    //         console.log(hash)
    //     })
    // }
    // async confirmHash(passParam, hashParam) {
    //     await bcrypt.compare(passParam, hashParam, (err, res) => {
    //         if (err) {
    //             console.error(err)
    //             return
    //         } else this.encryptSuccess = true;
    //     }

    //     )
    // }
    signup = () => {
        const email = this.emailField.value;
        const name = this.nameField.value;

        const password = this.passwordField.value;
        const passwordConfirmed = this.confPasswordField.value;
        const regExpNonDigit = RegExp(/^[^0-9]+$/);
        const regExp8CharsIpperAndLowerAndDigit = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
        if (!validator.validate(email)) {
            this.setState({
                errorEmailText: 'Please provide the correct email.'
            });
            
        // } else if (regExpNonDigit.test(name) === true) {
        //     this.setState({
        //         errorNameText: 'Please enter your name corectly.'
        //     });
        //     return;
        } else if (regExp8CharsIpperAndLowerAndDigit.test(password) === false) {  // at least 8 characters, one letter and one number
            this.setState({
                errorPasswordText: 'Password must contain minimum 8 characters, 1 letter and 1 number.'
            });
           
        } else if (password !== passwordConfirmed) {
            this.setState({
                errorConfirmPasswordText: "Passwords don't match"
            });
            
        } else if (password === passwordConfirmed) {
           
                            this.setState({
                                errorNameText: null,
                                errorPasswordText: null,
                                errorConfirmPasswordText: null,
                                errorEmailText: null,
                                email: email,
                                name: name,
                                password: password,

                            });
                     
                    }
        console.log('email: ' + this.state.email + ', name: ' + this.state.name + ',  pass: ' +
            this.state.password);
    }

    render() {
        const fieldEmailError = this.state.errorEmailText ?
            (
                <div className="errorMessage">
                    {this.state.errorEmailText}
                </div>) : null;
        const fieldNameError = this.state.errorNameText ?
            (
                <div className="errorMessage">
                    {this.state.errorNameText}
                </div>) : null;
        const fieldPasswordError = this.state.errorPasswordText ?
            (
                <div className="errorMessage">
                    {this.state.errorPasswordText}
                </div>) : null;
        const fieldConfirmPassError = this.state.errorConfirmPasswordText ?
            (
                <div className="errorMessage">
                    {this.state.errorConfirmPasswordText}
                </div>) : null;
        const passMsg = (<div className="message">
            {this.state.password_message}
        </div>)
        return (
            <div >
                <Modal.Dialog id="my-signup-modal">
                    {/* <Modal.Header closeButton>
                    </Modal.Header> */}
                    <Modal.Body>
                        <form>
                            <input className={classNames("input", { ["inputError"]: this.state.errorNameText })}
                                placeholder="Nume complet"
                                ref={(f) => { this.nameField = f; }}
                                type="text" />
                            {fieldNameError}

                            <input className={classNames("input", { ["inputError"]: this.state.errorEmailText })}
                                placeholder="Adresa de email"
                                ref={(f) => { this.emailField = f; }}
                                type="email" />
                            {fieldEmailError}
                            <input className={classNames("input", { ["inputError"]: this.state.errorPasswordText })}
                                placeholder="Parola"
                                ref={(f) => { this.passwordField = f; }}
                                type="password" />

                            {fieldPasswordError}
                            <input className={classNames("input", { ["inputError"]: this.state.errorConfirmPasswordText })}
                                placeholder="Confirma parola"
                                ref={(f) => { this.confPasswordField = f; }}
                                type="password" />
                            {fieldConfirmPassError}
                            {passMsg}
                            <div className="actionContainer">
                                <div className="button btn btn-dark" onClick={this.signup}>Creeaza cont</div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }

}

export default SignUp;
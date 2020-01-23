import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form, Container } from 'react-bootstrap';
import Quiz from '../quiz/Quiz';
import { Switch, Route, withRouter, BrowserRouter as Router } from 'react-router-dom';
import Adminplatform from '../../../admin/AdminPlatform';





class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePass = this.onChangePass.bind(this)
    }
    onChangeEmail(e) {
        const email = e.target.value;
        console.log(email);

        this.setState({ email: email })

    }
    onChangePass(e) {
        const pass = e.target.value;
        console.log(pass);

        this.setState({ pass: pass })
    }

    routeChange = (event) => {
        // const userPath = '/quiz';
        // const adminPath = '/admin';
        event.preventDefault()

        // console.log('123');


        //    return this.props.history.push(adminPath) ? this.state.email === 'admin@admin.com' : this.props.history.push(userPath);

        // if (this.state.email === 'admin@admin.com') {
        //     this.props.history.push(adminPath);
        // } else if (this.state.email === 'user@user.com') {
        //     this.props.history.push(userPath);
        // } else this.props.history.push(userPath);



        fetch('/authentication/sign-in',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    // name: this.state.name,
                    email: this.state.email,
                    password: this.state.pass,
                }),
            }
        )
            .then(res => res.json())
            .then(res => console.log(res))





    }


    render() {
        // console.log(this.state.email)
        return (
            <Container fluid>
                {/* {this.props.isActive ? */}
                <Row>

                    <Col className='py-3'  >
                        <div id='user-form' >
                            <Form onSubmit={this.routeChange}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control className="myinput" onChange={this.onChangeEmail} type="email" placeholder="Email" size='sm' />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control className="myinput" onChange={this.onChangePass} type="password" placeholder="Parola" size='sm' />
                                </Form.Group>
                                <Col>
                                    <Button variant="outline-secondary" className='submit' type="submit">
                                        <div className='login-text'>Logare</div>
                                    </Button>
                                </Col>
                            </Form>
                        </div>
                    </Col>

                </Row>
                {/* // : null} */}
            </Container>
        );
    }
}

export default withRouter(Login);
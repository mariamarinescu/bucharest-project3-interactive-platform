import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import Quiz from '../quiz/Quiz';
import {Switch, Route, withRouter} from 'react-router-dom';
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
        this.setState({ email: email })

    }
    onChangePass(event) {
        // this.setState({pass: event.target.value})
        // console.log(this.state.pass)
    }

    routeChange = () => {
        let userPath = `/quiz`;
        let adminPath = '/admin'
        if (this.state.email === 'admin@admin.com') {
            this.props.history.push(adminPath)
        } else this.props.history.push(userPath);

    }


    render() {
        console.log(this.state.email)
        return (
            <div id='login' >
                {/* {this.props.isActive ? */}
                <Row>
                    <Col className='py-3' md={{ offset: 8, span: 3 }} xs={{ offset: 4, span: 7 }} >
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control onChange={this.onChangeEmail} type="email" placeholder="Email" size='sm' />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control onChange={this.onChangePass} type="password" placeholder="Parola" size='sm' />
                            </Form.Group>
                            <Col md={{ offset: 4, span: 1 }}>
                                <Button className='login-btn' variant="outline-secondary" type="submit" onClick={this.routeChange}>
                                    <div className='login-text'>Logare</div>
                                </Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
                
                {/* // : null} */}
            </div>
        );
    }
}

export default withRouter(Login);
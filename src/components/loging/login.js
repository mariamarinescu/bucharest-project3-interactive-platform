import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePass = this.onChangePass.bind(this)
    }
    onChangeEmail(event) {
        //  this.setState({email: event.target.value})
        //  console.log(this.state.email)
    }
    onChangePass(event) {
        // this.setState({pass: event.target.value})
        // console.log(this.state.pass)
    }


    render() {
        return (
            <div className='login'>
                {this.props.isActive ?
                    <Row>
                        <Col className = 'py-3' md={{ offset: 8, span: 3 }}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control onChange={this.onChangeEmail()} type="email" placeholder="Email" size='sm' />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control onChange={this.onChangePass()} type="password" placeholder="Parola" size='sm' />
                                </Form.Group>
                                <Col md={{ offset: 4, span: 1 }}>
                                    <Button className='login-btn' variant="outline-secondary" type="submit">
                                        <div className='login-text'>Logare</div>
                                    </Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row> : null}
            </div>
        );
    }
}

export default login;

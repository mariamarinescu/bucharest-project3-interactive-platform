import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import './login.css'


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
    onChangeEmail(event) {
        //  this.setState({email: event.target.value})
        //  console.log(this.state.email)
    }
    onChangePass(event) {
        // this.setState({pass: event.target.value})
        // console.log(this.state.pass)
    }

    routeChange = () => {
        let path = `/`;
        this.props.history.push(path);
      }


    render() {
        return (
            <div className='login'>
                {/* {this.props.isActive ? */}
                    <Row>
                       <Col className = 'py-3' md={{ offset: 8, span: 3 }} xs={{offset: 4, span: 7}} >
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control onChange={this.onChangeEmail()} type="email" placeholder="Email" size='sm' />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control onChange={this.onChangePass()} type="password" placeholder="Parola" size='sm' />
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

import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../../../static/img/logo_techir.png";
import './NavBar.css'
import Login from '../login/Login';
import Signup from '../signup/SignUp';


class Navigation extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            isShownLogin: true
        }
    }

    toggleLogin = () => {
        this.props.onClickLogin();
        this.setState({
            isShownLogin: !this.state.isShownLogin
        })
        console.log("loggging" + this.state.isShownLogin)
    }
    toggleSignup = () => {
        this.props.onClickSignup();
        this.setState({
            isShownLogin: !this.state.isShownLogin
        })
        console.log("loggging" + this.state.isShownLogin)
    }
    
  
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand ><img src={logo} alt="techir-logo" className="logo-t"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-items" pullLeft>
                        <Link className="nav-link" onClick={this.toggleLogin} to="log-in">Conectare</Link>
                        <Link className="nav-link" onClick={this.toggleSignup} to="sign-up">Creeaza cont</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default withRouter(Navigation);

import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../../../static/img/logo_techir.png";
import './NavBar.css'
import Login from '../login/Login';
import Signup from '../signup/SignUp';


class Navigation extends React.Component  {
    counter = 0;
    constructor(props) {
        super(props)
        this.state = {
            isShownLogin: true,
            isShownSignup: true
        }
    }

    toggleLogin = () => {
        this.counter += 1;
        if(this.counter % 2 === 0) {
            this.props.onClickLogin(false);
        } else if(this.counter % 2 !== 0) {
            this.props.onClickLogin(true);
        }
        // this.props.onClickLogin(true);
        // this.setState({
        //     isShownLogin: !this.state.isShownLogin
        // })
        // console.log("loggging" + this.state.isShownLogin)
    }
    // toggleSignup = () => {
    //     this.props.onClickLogin();
    //     this.setState({
    //         isShownSignup: !this.state.isShownSignup
    //     })
    //     // console.log("sigggin" + this.state.isShownLogin)
    // }
    
  
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand ><img src={logo} alt="techir-logo" className="logo-t"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-items" pullLeft>
                        <Link className="nav-link" onClick={this.toggleLogin} to="log-in">Conectare</Link>
                        <Link className="nav-link" onClick={this.toggleLogin} to="sign-up">Creeaza cont</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default withRouter(Navigation);

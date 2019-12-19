import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import logo from "../../static/img/logo_techir.png";
import './NavBar.css'
// const Navigation = styled.header


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }
    render() {
        const { isExpanded } = this.state;

        return (
            <Row className='NavBar'>
                <Col className="logo-container">
                    <Link to="/">
                        <img src={logo} className='logo' alt="Logo" />
                    </Link>
                </Col>
                <Col className='logare nav-text' md={{offset: 3}}>
                    <div>Logare</div>
                </Col>
                <Col className='creeare-cont nav-text'>
                    <div>Creare Cont</div>
                </Col>
            </Row>
        );
    }
}

export default Nav;

import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../../../static/img/logo_techir.png";
import './NavBar.css'
// const Navigation = styled.header


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // handleToggle(e) {
    //     e.preventDefault();
    //     this.setState({
    //         isExpanded: !this.state.isExpanded
    //     });
    // }
    render() {

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand ><img src={logo} alt="techir-logo" className="logo-t"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-items" pullLeft>
                        <Link className="nav-link" to="log-in">Conectare</Link>
                        <Link className="nav-link" to="sign-up">Creeaza cont</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <div className='Navigation'>
            //     <div className="logo">
            //         <Link to="/">
            //             <img src={logo} alt="Logo" className="logo"/>
            //             <em>
            //                 <div className="letterhead">
            //                 </div>
            //             </em>
            //         </Link>
            //     </div>
            //     <nav className="nav">
            //         <i
            //             className="fa-bars fa "
            //             aria-hidden="true"
            //             onClick={e => this.handleToggle(e)}
            //         />
            //         <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            //             <Link className="nav-link"activeClassName="active" to="/log-in">
            //                 <li>Conectare</li>
            //             </Link>
            //             <Link className="nav-link" activeClassName="active" to="/sign-up">
            //                 <li>Creeaza cont</li>
            //             </Link>
            //         </ul>
            //     </nav>
            // </div>
        );
    }
}

export default withRouter(Navigation);

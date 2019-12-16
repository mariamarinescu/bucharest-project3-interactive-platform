import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Img/logo_techir.png"
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
            <div className='Navigation'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo"/>
                        <em>
                            <div className="letterhead">
                            </div>
                        </em>
                    </Link>
                </div>
                <nav className="nav">
                    <i
                        className="fa-bars fa "
                        aria-hidden="true"
                        onClick={e => this.handleToggle(e)}
                    />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <NavLink activeClassName="active" to="/">
                            <li>Conectare</li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/Sign-Up">
                            <li>Creeaza cont</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;

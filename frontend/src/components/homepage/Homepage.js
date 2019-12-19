import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import Login from '../login/login'
import SignUp from '../SignUp/SignUp'
import GirlModel from '../Gurl/GirlModel'

export default class Homepage extends Component {
    render() {
        return (
            <div className='fullpage'>
                <NavBar/>
                <Login isActive/>
                <SignUp/>
                <GirlModel/>
            </div>
        );
    }
}


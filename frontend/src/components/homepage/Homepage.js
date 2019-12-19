import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import Login from '../login/login'
import SignUp from '../SignUp/SignUp'
import GirlModel from '../Gurl/GirlModel'
import Quiz from '../quiz/Quiz'
import Que from '../quiz/Question'
import Modal from '../quiz/Modal'

export default class Homepage extends Component {
    render() {
        return (
            <div className='fullpage'>
                {/* <NavBar/>
                <Login isActive/>
                <SignUp/>
                <GirlModel/> */}
                <Quiz/>
                {/* <Modal/>
                <Que/> */}
            </div>
        );
    }
}


import React from 'react';

import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import EditInfoCards from "./admin-components/InfoCard/EditInfoCards";
import QCards from './admin-components/quiz-cards/QCards';
import AdminNav from './admin-components/admin_nav/AdminNav';
import Maps from '../homepage/homepage-components/maps/Maps';
import Nav from '../homepage/homepage-components/navbar/NavBar';
import Footer from '../homepage/homepage-components/footer/Footer';
import Parteners from '../homepage/homepage-components/parteners/Parteners';
import SignUp from '../homepage/homepage-components/signup/SignUp';
import Login from '../homepage/homepage-components/login/Login';
import Quiz from '../homepage/homepage-components/quiz/Quiz';


class AdminPlatform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoCards: false,
            quizCards: false
        }
    }

    showCards = (param) => {
        if(param === 'info') {
            this.setState({
                infoCards: true,
                quizCards: false
            })
        } else if (param === 'quiz') {
            this.setState({
                infoCards: false,
                quizCards: true
            })
        } else {
            this.setState({
                infoCards: false,
                quizCards: false
            })
        }
    }


    render() {
        const infoCards = this.state.infoCards;
        const quizCards = this.state.quizCards;
        let QuizCards;
        let InfoCards;

        if(infoCards) {
            QuizCards = <EditInfoCards/>;
        }else if(quizCards) {
            InfoCards =<QCards/>
        }


        return (
            <div>
                    <AdminNav choose={this.showCards}/>
                   {QuizCards}
                   {InfoCards}
            </div>
        )
    }
}

export default withRouter(AdminPlatform);
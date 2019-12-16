import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import './AdminNav.css';
import { Link } from 'react-router-dom';

class AdminNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quizBttnState: false,
            descriptionBttnState: false

        }
    }
    descbtnStyleActive = {
        backgroundColor: '#A9A9A9',
        color: '#696969'
    }
    descbtnStyleInactive = {
        backgroundColor: '#696969',
        color: 'white'
    }
    quizbtnStyleActive = {
        backgroundColor: '#A9A9A9',
        color: '#696969'
    }
    quizbtnStyleInactive = {
        backgroundColor: '#696969',
        color: 'white'
    }
    componentDidUpdate() {

    }
    handleDescription = () => {
        this.setState({
            descriptionBttnState: false,
            quizBttnState: true
        })
    }

    handleQuiz = () => {
        this.setState({
            quizBttnState: false,
            descriptionBttnState: true
        })
    }

    render() {
        return (

            <div className="admin-nav">
                <ButtonToolbar>
                    <Link to="/admin/editeaza-descrieri">
                        <Button variant="secondary" size="lg"
                            style={this.state.descriptionBttnState ? this.descbtnStyleActive : this.descbtnStyleInactive}
                            className="admin-desc-bttn"
                            onClick={this.handleDescription}
                        >
                            Descrieri
                        </Button>
                    </Link>
                    <Link to="/admin/editeaza-chestionar">
                        <Button variant="secondary" onClick={this.handleQuiz}
                            style={this.state.quizBttnState ? this.quizbtnStyleActive : this.quizbtnStyleInactive}
                            size="lg" className="admin-quiz-bttn" >
                            Chestionar
                    </Button>
                    </Link>
                </ButtonToolbar>
            </div>
        )
    }

}

export default AdminNav;
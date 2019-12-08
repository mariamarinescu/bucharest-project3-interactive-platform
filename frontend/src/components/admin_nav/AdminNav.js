import React from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap';
import './AdminNav.css';



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
           descriptionBttnState: !this.state.descriptionBttnState
       })
   }

   handleQuiz = () => {
    this.setState({
        quizBttnState: !this.state.quizBttnState
    })
}
   
    render() {
        return (

            <div className="admin-nav">
                <ButtonToolbar>
                <Button style={this.state.descriptionBttnState ? this.descbtnStyleActive : this.descbtnStyleInactive} className="admin-desc-bttn" onClick={this.handleDescription} variant="secondary" size="lg">
                    Descrieri
                </Button>
                <Button  style={this.state.quizBttnState ? this.quizbtnStyleActive : this.quizbtnStyleInactive} className="admin-quiz-bttn" onClick={this.handleQuiz} variant="secondary" size="lg">
                    Chestionar
                </Button>
                </ButtonToolbar>
            </div>
        )
    }

}

export default AdminNav;
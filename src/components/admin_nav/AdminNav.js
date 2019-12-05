import React from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap';
import classNames from 'classnames';



class AdminNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            descColor: '#696969',
            quizColor: '#DCDCDC',
            descActive: true,
            quizActive: false,
            descText: '#fff',
            quixText: '#A9A9A9'
            
        }
    }

    watcher=()=> {
        if(this.state.descActive === true && this.state.quizActive === false ) {
            this.setState({
                descColor: '#696969',
                quizColor: '#DCDCDC',
                descText: '#fff',
                quixText: '#A9A9A9'

            })
        } else {
            this.setState({
                descColor: '#DCDCDC',
                quizColor: '#696969',
                descText: '#A9A9A9',
                quixText: '#fff'
            })
        }
    }
    componentDidUpdate() {
        this.watcher()
    }
    activateIt = () => {
        this.setState({
            descActive: !this.state.descActive
        })
            
        
    }
    activateQuiz = () => {
        this.setState({
            quizActive: !this.state.quizActive
        })
    
    }
   
    render() {
        return (
            <div>
                <ButtonToolbar>
                <Button style={{backgroundColor:this.state.descColor}} className="admin-desc-bttn" onClick={this.activateIt} variant="secondary" size="lg">
                    Descrieri
                </Button>
                <Button  style={{backgroundColor:this.state.quizColor, color: this.state.descText}} className="admin-quiz-bttn" onClick={this.activateQuiz} variant="secondary" size="lg">
                    Chestionar
                </Button>
                </ButtonToolbar>
            </div>
        )
    }

}

export default AdminNav;
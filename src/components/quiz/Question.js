import React from 'react'
import * as data from './my_fake_db/my_fake_db.json';
import {Button} from 'react-bootstrap';
import ModalQ from './Modal'


class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isValid: false
        }
    }
 
    validateAnswer = () => {
        // if(answerIndex === 0) {
            // this.setState({
            //     isValid: true
            // })
        // } else return;
      
        this.setState({
            isValid: true
        })

    }




    

    render() {
      
        return(
            <div className="quiz-q-container">
                <h3 className="q-question">{data.quiz.face.firstQuestion.question}</h3>
                <img className="q-img" src={data.quiz.face.firstQuestion.firstQuestionImg} alt="question"
                 width="250px" height="250px"></img>
                <div className="questions-container">
                <Button variant="secondary" className="q-first-question"  onClick={this.validateAnswer} size="lg" block>{data.quiz.face.firstQuestion.answers[0]} </Button>
                <Button variant="secondary" className="q-second-question" size="lg" block>{data.quiz.face.firstQuestion.answers[1]} </Button>
                {this.state.isValid ? <ModalQ/> : <p>Nope</p>  }

             
          
            </div>
            </div>
            
        )
    }
}


export default Question;
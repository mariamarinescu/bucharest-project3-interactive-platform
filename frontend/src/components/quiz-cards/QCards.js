import React from 'react';
import * as data from './my_fake_db.json';
import QCard from './quiz-card/QCard';



class QCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            face: {
                firstQ: {
                    question: data.quiz.face.firstQuestion.question,
                    answers: data.quiz.face.firstQuestion.answers,
                    correct: data.quiz.face.firstQuestion.correct,
                    image: data.quiz.face.firstQuestion.firstQuestionImg
                },
                secondQ: {
                    question: data.quiz.face.secondQuestion.question,
                    answers: data.quiz.face.secondQuestion.answers,
                    correct: data.quiz.face.secondQuestion.correct,
                    image: data.quiz.face.secondQuestion.secondQuestionImg
                }

            },
            hair: {
                firstQ: {
                    question: data.quiz.hair.firstQuestion.question,
                    answers: data.quiz.hair.firstQuestion.answers,
                    correct: data.quiz.hair.firstQuestion.correct,
                    image: data.quiz.hair.firstQuestion.firstQuestionImg
                },
                secondQ: {
                    question: data.quiz.hair.secondQuestion.question,
                    answers: data.quiz.hair.secondQuestion.answers,
                    correct: data.quiz.hair.secondQuestion.correct,
                    image: data.quiz.hair.secondQuestion.secondQuestionImg
                }

            },
            massage: {
                firstQ: {
                    question: data.quiz.massage.firstQuestion.question,
                    answers: data.quiz.massage.firstQuestion.answers,
                    correct: data.quiz.massage.firstQuestion.correct,
                    image: data.quiz.massage.firstQuestion.firstQuestionImg
                },
                secondQ: {
                    question: data.quiz.massage.secondQuestion.question,
                    answers: data.quiz.massage.secondQuestion.answers,
                    correct: data.quiz.massage.secondQuestion.correct,
                    image: data.quiz.massage.secondQuestion.secondQuestionImg
                }

            },
            anticelulitis: {
                firstQ: {
                    question: data.quiz.anticelulitis.firstQuestion.question,
                    answers: data.quiz.anticelulitis.firstQuestion.answers,
                    correct: data.quiz.anticelulitis.firstQuestion.correct,
                    image: data.quiz.anticelulitis.firstQuestion.firstQuestionImg
                },
                secondQ: {
                    question: data.quiz.anticelulitis.secondQuestion.question,
                    answers: data.quiz.anticelulitis.secondQuestion.answers,
                    correct: data.quiz.anticelulitis.secondQuestion.correct,
                    image: data.quiz.anticelulitis.secondQuestion.secondQuestionImg
                }

            }
        
    }
    }

    render() {
        return(
            <div className="quiz-admin-cards-container" >
                <div id="qcard-f-card" style={{left: '5%'}}>
                <QCard  question={this.state.face.firstQ.question} answers={this.state.face.firstQ.answers} category={"Fata"}  image={this.state.face.firstQ.image}/>
                </div>
                {/* <QCard clasName="qcard-s-card" question={this.state.hair.firstQ.question} answers={this.state.hair.firstQ.answers} category={"Par"}  image={this.state.hair.firstQ.image}/>
                <QCard clasName="qcard-t-card" question={this.state.massage.firstQ.question} answers={this.state.massage.firstQ.answers} category={"Par"}  image={this.state.massage.firstQ.image}/>
                <QCard clasName="qcard-fo-card" question={this.state.anticelulitis.firstQ.question} answers={this.state.anticelulitis.firstQ.answers} category={"Par"}  image={this.state.anticelulitis.firstQ.image}/> */}


            </div>
        )
    }
}

export default QCards;
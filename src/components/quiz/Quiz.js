import React from 'react';
import * as data from './my_fake_db/my_fake_db.json';
import Question from './Question'



class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalSuccessDescription: 'Intra pe www.techir.ro si adauga in cos produsele tale preferate, iar la checkout-ul comenzii ai un loc special unde trebuie sa introduci codul de reducere, pentru a scadea valoarea voucher-ului din suma totala a cosului dvs.',
            modalSuccessLastMessage: 'Codul dvs. a fost trimis pe email.Va asteptam saptamana viitoare!',
            modalFailureDescription: 'De data aceasta, nu a fost sa fie dar te asteptam saptamana viitoare sa mai incercam odata!',
            modalFailureLastMessage: 'Iti multumim ca iei parte parte impreuna cu noi in aceasta minunta experiata, cea de a cunoaste mama natura <3',
            question: data.quiz.face.firstQuestion.question,
            image: data.quiz.face.firstQuestion.firstQuestionImg,
            answers: [data.quiz.face.firstQuestion.answers[0], data.quiz.face.firstQuestion.answers[1]],
            discount: data.quiz.face.discounts.twenty.sum
        }
    }




    render() {
        return(
            <div className="quiz-container">
                <h1 className="quiz-title">Concurs Techir</h1>
                <h6 className="quiz-desc">Participa, raspunzand la doua intrebari si poti castiga reduceri la produsele tale favorite.</h6>
                <Question modalSuccessDescription={this.state.modalSuccessDescription} modalSuccessLastMessage={this.state.modalSuccessLastMessage} 
                modalFailureDescription={this.state.modalFailureDescription} modalFailureLastMessage={this.state.modalSuccessLastMessage} 
                question={this.state.question} image={this.state.image} answers={this.state.answers} discount={this.state.discount}/>
            </div>
        )
    }
}


export default Quiz


import React from 'react';
import Question from './Question';

const data =  {
    "quiz": {
        "face" :{
            "firstQuestion": {
                "question" : "Care sunt proprietatile acestui sapun?",
                "answers": ["Actiune hranitoare","Actiune exfolianta"],
                "firstQuestionImg": "http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png",
                "correct": 0
            },
            "secondQuestion": {
                "question": "Care dintre cele doua variante reprezinta problemele principale de zi cu zi ale tenului?",
                "answers": ["Praful","Impurtitatile adunate si uscarea tenului"],
                "secondQuestionImg": "https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg",
                "correct": 1
            },
            "discounts": {
                "ten": { 
                    "code": "FATA1234510",
                    "sum": 10 
                },
                "twenty": {
                    "code": "FATA1234520",
                    "sum": 20
                },
                "thirty": {
                    "code": "FATA1234530",
                    "sum": 30
            }
        }
    },
        "hair" :{
            "firstQuestion": {
                "question" : "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "secondQuestion": {
                "question": "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "discounts": {
                "ten": "PAR1234510"
            }
        },
        "massage" :{
            "firstQuestion": {
                "question" : "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "secondQuestion": {
                "question": "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "discounts": {
                "ten": "MASAJ1234567"
            }
        },
        "anticelulitis" :{
            "firstQuestion": {
                "question" : "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "secondQuestion": {
                "question": "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "discounts": {
                "ten": "ANTICEL1234567"
            }
        }
    }
    
}



class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalSuccessTitle: ' Felicitari! Tocmai ai castigat un cupon de reducere!',
            modalSuccessDescription: 'Intra pe www.techir.ro si adauga in cos produsele tale preferate, iar la checkout-ul comenzii ai un loc special unde trebuie sa introduci codul de reducere, pentru a scadea valoarea voucher-ului din suma totala a cosului dvs.',
            modalSuccessLastMessage: 'Codul dvs. a fost trimis pe email.Va asteptam saptamana viitoare!',
            modalFailureTitle: ' Aww, mai mult noroc data viitoare!',
            modalFailureDescription: 'De data aceasta, nu a fost sa fie dar te asteptam saptamana viitoare sa mai incercam odata!',
            modalFailureLastMessage: 'Iti multumim ca iei parte parte impreuna cu noi in aceasta minunta experiata, cea de a cunoaste mama natura <3',
            question: data.quiz.face.firstQuestion.question,
            image: data.quiz.face.firstQuestion.firstQuestionImg,
            answers: [data.quiz.face.firstQuestion.answers[0], data.quiz.face.firstQuestion.answers[1]],
            firstQuestionCorrect: false,
            secondQuestionCorrect: false
        }


    }

    // questionOne = () => {
    //     getQuestion()
    // }

    // questionTwo = () => {
    //     getQuestion()
    // }

    // getQuestion() {
    //     // GET /api/question

    //     //Response:
    //     // {
    //     //     text: "",
    //     //     answer: "",
    //     //     discount: "",
    //     //     image: "",
    //     //     correct: 0
    //     // }
    // }


    render() {
        return (
            <div className="quiz-container">
                <h1 className="quiz-title">Concurs Techir</h1>
                <h6 className="quiz-desc">Participa, raspunzand la doua intrebari si poti castiga reduceri la produsele tale favorite.</h6>
                <Question
                    question={this.state.question} image={this.state.image} answers={this.state.answers} discount={this.state.discount}
                    modalSuccessDescription={this.state.modalSuccessDescription} modalSuccessLastMessage={this.state.modalSuccessLastMessage}
                    modalFailureDescription={this.state.modalFailureDescription} modalFailureLastMessage={this.state.modalFailureLastMessage}
                />
            </div>
        )
    }
}

export default Quiz;
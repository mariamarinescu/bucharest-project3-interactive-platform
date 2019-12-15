import React from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
// import data from './my_fake_db.js';



class QCard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     //     face: {
    //     //         firstQ: {
    //     //             question: data.face.firstQuestion.question,
    //     //             answers: data.face.firstQuestion.answers,
    //     //             correct: data.face.firstQuestion.correct,
    //     //             image: data.face.firstQuestion.firstQuestionImg
    //     //         },
    //     //         secondQ: {
    //     //             question: data.face.secondQuestion.question,
    //     //             answers: data.face.secondQuestion.answers,
    //     //             correct: data.face.secondQuestion.correct,
    //     //             image: data.face.secondQuestion.secondQuestionImg
    //     //         }

    //     //     },
    //     //     hair: {
    //     //         firstQ: {
    //     //             question: data.hair.firstQuestion.question,
    //     //             answers: data.hair.firstQuestion.answers,
    //     //             correct: data.hair.firstQuestion.correct,
    //     //             image: data.hair.firstQuestion.firstQuestionImg
    //     //         },
    //     //         secondQ: {
    //     //             question: data.hair.secondQuestion.question,
    //     //             answers: data.hair.secondQuestion.answers,
    //     //             correct: data.hair.secondQuestion.correct,
    //     //             image: data.hair.secondQuestion.secondQuestionImg
    //     //         }

    //     //     },
    //     //     massage: {
    //     //         firstQ: {
    //     //             question: data.massage.firstQuestion.question,
    //     //             answers: data.massage.firstQuestion.answers,
    //     //             correct: data.massage.firstQuestion.correct,
    //     //             image: data.massage.firstQuestion.firstQuestionImg
    //     //         },
    //     //         secondQ: {
    //     //             question: data.massage.secondQuestion.question,
    //     //             answers: data.massage.secondQuestion.answers,
    //     //             correct: data.massage.secondQuestion.correct,
    //     //             image: data.massage.secondQuestion.secondQuestionImg
    //     //         }

    //     //     }
    //     //     // anticelulitis: {
    //     //     //     firstQ: {
    //     //     //         question: data.anticelulitis.firstQuestion.question,
    //     //     //         answers: data.anticelulitis.firstQuestion.answers,
    //     //     //         correct: data.anticelulitis.firstQuestion.correct,
    //     //     //         image: data.anticelulitis.firstQuestion.firstQuestionImg
    //     //     //     },
    //     //     //     secondQ: {
    //     //     //         question: data.anticelulitis.secondQuestion.question,
    //     //     //         answers: data.anticelulitis.secondQuestion.answers,
    //     //     //         correct: data.anticelulitis.secondQuestion.correct,
    //     //     //         image: data.anticelulitis.secondQuestion.secondQuestionImg
    //     //     //     }

    //     //     // }
    //     // }
    // }

    //    retrieveData = () => {

    //     }
 render() {
        return (
            <div className="q-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default QCard;
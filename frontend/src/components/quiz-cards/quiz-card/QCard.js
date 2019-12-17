import React from 'react';
import { Card, ListGroup, ListGroupItem, InputGroup, FormControl, Button } from 'react-bootstrap';


class QCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            Qno: "",
            question: "",
            firstAns: "",
            secondAns: "",
            imgLink: ""
        }
    }

    handleAdminInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    } 

    saveQuizQ = () => {
        console.log(this.state.imgLink + ";" + this.state.firstAns + ";" + this.state.secondAns + ";" + this.state.question + ";")
    }


    render() {
        return (
            <div className="q-card">
                <Card style={{ width: '23rem', height: '29rem', margin: 'solid white 50px' }}>
                    <Card.Body>
                        <Card.Title>Categoria aleasa: {this.props.category}.</Card.Title>
                            <FormControl
                                className="ac-question"
                                placeholder={this.props.question}
                                aria-label="Question"
                                aria-describedby="basic-addon1"
                                name="question"
                                value={this.state.question}
                                onChange={(event) => this.handleAdminInput(event)}
                                as="textarea" rows="3"
                            />
                    </Card.Body>
                    
                        <FormControl
                            className="ac-f-ans"
                            placeholder={this.props.answers[0]}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="firstAns"
                            value={this.state.firstAns}
                            onChange={(event) => this.handleAdminInput(event)}
                        />
                        <FormControl
                            className="ac-s-ans"
                            placeholder={this.props.answers[1]}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="secondAns"
                            value={this.state.secondAns}
                            onChange={(event) => this.handleAdminInput(event)}
                        />
                        <Card.Title className="q-c-img-title">Link imagine:</Card.Title>
                            <FormControl
                                className="ac-img-src"
                                placeholder={this.props.image}
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name="imgLink"
                                value={this.state.imgLink}
                                onChange={(event) => this.handleAdminInput(event)}
                            />
                    <Card.Body>
                        <Card.Text>
                            
                        </Card.Text>
                        <Button variant="outline-dark" className="mySaveCardQuiz-bttn" type="submit" onClick={this.saveQuizQ}>Salveaza</Button>
                        </Card.Body>
                </Card>
            </div>
        )
    }
}


export default QCard;
import React from 'react';
import { Card, ListGroup, ListGroupItem, InputGroup, FormControl } from 'react-bootstrap';


class QCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            Qno: "",
            question: "",
            answers: [],
            image: ""


        }
    }


    render() {
        return (
            <div className="q-card">
                <Card style={{ width: '88rem' }}>
                    <Card.Body>
                        <Card.Title>Categoria aleasa: {this.props.category}. {this.props.Qno} intrebare:</Card.Title>
                        <Card.Text>
                            <FormControl
                                placeholder={this.props.question}
                                aria-label="Question"
                                aria-describedby="basic-addon1"
                                value={}
                            />
                        </Card.Text>
                    </Card.Body>
                    {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>{this.props.question}</ListGroupItem>
                </ListGroup> */}
                    <InputGroup >
                        {/* className="mb-3" */}
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <hr />
                        <FormControl
                            placeholder={this.props.answers[0]}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <FormControl
                            placeholder={this.props.answers[1]}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Card.Body>
                        <Card.Text>
                            <Card.Title>Link imagine:</Card.Title>
                            <FormControl
                                placeholder={this.props.image}
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </Card.Text></Card.Body>
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
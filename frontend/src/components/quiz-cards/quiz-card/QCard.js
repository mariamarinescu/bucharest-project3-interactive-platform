import React from 'react';
import { Card, ListGroup, ListGroupItem,InputGroup,FormControl } from 'react-bootstrap';



const QCard = ({ }) => {

    return (
        <div className="q-card">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{this.props.question}</ListGroupItem>
                </ListGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}


export default QCard;
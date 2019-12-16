import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

class InfoCard extends Component {
constructor(props) {
    super(props);
    this.state = {
        categ: "",
        descOne: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele din ingrediente narurale care te vor ajuta!",
        descTwo: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele din ingrediente narurale care te vor ajuta!"
    }

}
handleDescOne=(event) => {
    this.setState({
        descOne:event.target.value
    })
}
    handleDescTwo=(event) => {
        this.setState({
            descTwo:event.target.value
        })
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Categoria: {this.props.categ}</Card.Title>
<Form>
    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descriere</Form.Label>
        <Form.Control as="textarea" rows="3"
        placeholder={this.props.descOne}
                      value={this.props.descOne}
                      onChange={(event) => this.handleDescOne(event)}
        />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Link</Form.Label>
        <Form.Control as="textarea" rows="3"
        placeholder={this.props.descTwo}
                      value={this.props.descTwo}
                      onChange={(event) => this.handleDescTwo(event)}
        />
    </Form.Group>
</Form>
                    <Button variant="primary">Save</Button>
                </Card.Body>
            </Card>
                    )
        }
    }

    export default InfoCard;




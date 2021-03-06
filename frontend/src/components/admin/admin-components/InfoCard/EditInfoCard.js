import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categ: "",
            descOne: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele din ingrediente narurale care te vor ajuta!",
            // descTwo: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele din ingrediente narurale care te vor ajuta!"
            link: "http://www.techir.ro/blog-techir/proprietatile-miraculoase-ale-apei-si-namolului-din-lacul-techirghol/"
        }

    }
    handleDescOne = (event) => {
        this.setState({
            descOne: event.target.value
        })
    }
    handleLink= (event) => {
        this.setState({
            link: event.target.value
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
                                placeholder={this.props.link}
                                value={this.props.link}
                                onChange={(event) => this.handleLink(event)}
                            />
                        </Form.Group>
                    </Form>
                    <Button variant="outline-dark" style={{width: "190px"}}>Save</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default InfoCard;




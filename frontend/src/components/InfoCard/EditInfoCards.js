import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfoCard from "./EditInfoCard";
import './EditInfoCards.css'

const nume = [
    {
        categ: "Fata",
        descOne: "BlaBlaBla",
        descTwo: "LALALALLAA"
    },
    {
        categ: "Par",
        descOne: "Esti tunsa",
        descTwo: "Ce bine1"
    },
    {
        categ: "Coapsa",
        descOne: "E forta",
        descTwo: "Ce bine2"
    },
    {
        categ: "Piele",
        descOne: "E fina",
        descTwo: "Ce bine3"
    },
    {
        categ: "Corp",
        descOne: "E fina",
        descTwo: "Ce bine3"
    },
    {
        categ: "Fata",
        descOne: "E fina",
        descTwo: "Ce bine3"
    }
]


class EditInfoCards extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Row className='info-cards'>
                {nume.map((valueOfElement, index) => {
                    return (
                        <Col>
                            <InfoCard {...valueOfElement} key={index} />
                        </Col>
                    )
                })}
            </Row>
        )
    }
}

export default EditInfoCards;




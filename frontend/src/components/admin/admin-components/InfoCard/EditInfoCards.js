import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfoCard from "./EditInfoCard";
import './EditInfoCards.css'

const nume = [
    {
        categ: "Fata",
        descOne: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi.",
        descTwo: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi"
    },
    {
        categ: "Par",
        descOne: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi",
        descTwo: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi"
    },
    {
        categ: "Masaj",
        descOne: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi",
        descTwo: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi"
    },
    {
        categ: "Piele",
        descOne: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi",
        descTwo: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi"
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
                            <InfoCard {...valueOfElement} key={index} className="card" />
                        </Col>
                    )
                })}
            </Row>
        )
    }
}

export default EditInfoCards;




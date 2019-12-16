import React, {Component} from "react";
import InfoCard from "./EditInfoCard";
import './EditInfoCards.css'

const  nume = [
    {categ: "Fata",
        descOne: "BlaBlaBla",
        descTwo: "LALALALLAA"},
    {categ: "Par",
        descOne: "Esti tunsa",
        descTwo: "Ce bine1"},
    {categ: "Coapsa",
        descOne: "E forta",
        descTwo: "Ce bine2"},
    {categ: "Piele",
        descOne: "E fina",
        descTwo: "Ce bine3"},
]


class EditInfoCards extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                {nume.map((valueOfElement,index) => {
                    return (
                    <InfoCard {...valueOfElement} key={index}/>
                    )
                })}
            </div>

        )
    }
}

export default EditInfoCards;




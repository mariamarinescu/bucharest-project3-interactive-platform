import React from "react"
import {Button} from 'react-bootstrap';
import * as check from './../../static/img/hook-1425312.png'

class Content extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <div className="hover-question">
            <img src={check} width="50px" height="50px" className="check"/>
            <p className="hover-text">{this.props.info}</p>
              <Button className="onhover-quiz-bttn" variant="outline-danger">Participa si castiga</Button>
              <Button className="onhover-findoutMore-bttn" variant="outline-secondary">Afla detalii</Button>
          </div>
        )
    }
}

export default Content;
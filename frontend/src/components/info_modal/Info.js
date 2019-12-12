import React from 'react'
import Content from './Content'
import * as data from './my_fake_db.json'
import {Button} from 'react-bootstrap';
import * as check from './../../static/img/hook-1425312.png'




class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      faceActive: false,
      hairActive: false,
      anticel: false,
      massage: false,
      category: "",
      info: ""

    }
  }

  retrieveAndSetChosenCateg = () => {
    let categ = data.hover.category[1];
    this.setState({
      category: categ
    })
  }
  
  retrieveAndSetAboutFaceInfo = () => {
    let info = data.hover.face.one;
    this.setState({
      info: info
    })
  }

  componentDidMount() {
    this.retrieveAndSetAboutFaceInfo();
  }
  handleHover = () => {
    this.setState({
        isHovered: true
    });
}
handleLeaveHover = () => {
  setTimeout( () => {
    this.setState({
      isHovered: false
    })
    
  }, 1500)
}
 
render() {
    const contentClass = this.state.isHovered ? "hover-question" : "not-hovered-question";
    return (
     <div className="info">
        <div id="bulding-line-1"></div>
       <button className="loading" onMouseEnter={this.handleHover} onMouseLeave={this.handleLeaveHover}></button>
       <div className={contentClass}>
        
            <img src={check} width="50px" height="50px" className="check"/>
            <p className="hover-text">{this.state.info}</p>
              <Button className="onhover-quiz-bttn" variant="outline-danger">Participa si castiga</Button>
              <Button className="onhover-findoutMore-bttn" variant="outline-secondary">Afla detalii</Button>
          </div>
       {/* <Content info={this.state.info}/> */}
     </div>
    )
  }
}



export default Info;
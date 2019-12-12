import React from 'react'
import * as check from './../../static/img/check-3183213_1920.png'



class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: "",
      question: ""

    }
  }

  render() {
    return (
      <div className="hover-question">
        <img src={check} width="50px" height="50px" className="check"/>
      </div>
    )
  }
}



export default Info;
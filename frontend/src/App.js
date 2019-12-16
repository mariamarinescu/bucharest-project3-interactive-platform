import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/info_modal/Info.css'
// import Info from './components/info_modal/Info'
import GirlModel from './components/Gurl/GirlModel'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='app'>
        <GirlModel />
        {/* <Info /> */}
      </div>
    );
  }
}

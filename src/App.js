import React, { Component } from 'react';
import LightningBoye from './components/Gurl/GirlModel'
import './App.css'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='app'>
        <LightningBoye />
      </div>
    );
  }
}



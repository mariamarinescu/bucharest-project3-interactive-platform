import React, { Component } from 'react';
import Footer from './components/Footer/Footer'
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
        <Footer />
      </div>
    );
  }
}



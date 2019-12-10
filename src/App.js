import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Maps from './components/maps/Maps'
import { Container, Row, Col } from 'react-bootstrap';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='app'>
        <div>
          <div style = {{height: '60vh'}}>
            
              <Maps />
            
          </div>
        </div>
      </div>
    );
  }
}



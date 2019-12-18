import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import SignUp from './components/homepage/Homepage';
import Login from './components/homepage/Homepage';
import Quiz from './components/homepage/Homepage';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import './components/info_modal/Info.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Homepage />
         
        </BrowserRouter>

      </div>
    );
  }

}


export default App;
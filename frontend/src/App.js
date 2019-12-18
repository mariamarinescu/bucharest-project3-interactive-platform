import NavBar from "./components/navbar/NavBar";
import Footer from './components/footer/Footer';
import Homepage from './components/homepage/Homepage';
import SignUp from './components/homepage/Homepage';
import Login from './components/homepage/Homepage';
import Quiz from './components/homepage/Homepage';

import './components/info_modal/Info.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Admin from './components/Admin';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <NavBar /> */}
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/admin'>
              <NavBar />
              <div style={{        
                textAlign: 'center',
                paddingTop: '3vh',
                fontSize: '1.5em'
              }}>
                Alege categoria pe care doresti sa o modifici.
              </div>
              <Admin />
              {/* <Redirect to='/admin/editeaza-descrieri'/> */}
              <Footer />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    );
  }
}
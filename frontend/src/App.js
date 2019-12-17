import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from "./components/navbar/NavBar";
import Footer from './components/footer/Footer';
import SingUp from './components/signup/SignUp'
import Login from './components/login/Login';
import GirlModel from './components/Gurl/GirlModel'

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/info_modal/Info.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <GirlModel />
          {/* <Footer /> */}
          <Switch>
            <Route path="/sign-up" component={SingUp}/>
          </Switch>
          <Switch>
          <Route path="/log-in" component={Login}/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}


export default App;


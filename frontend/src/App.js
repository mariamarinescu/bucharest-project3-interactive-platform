import NavBar from "./components/navbar/NavBar";
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from './components/Admin';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route path='/'>

            </Route>
            <Route path='/admin'>
              <Admin />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}





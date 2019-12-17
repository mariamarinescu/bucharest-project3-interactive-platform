import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/users'>

            </Route>
            <Route path='/admin'>

            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}






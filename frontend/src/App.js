import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/loging/login'


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true
    }
  }
  render() {
    return (
      <div>
        <Login isActive={this.state.showLogin} />
      </div>
    );
  }
}

export default App;

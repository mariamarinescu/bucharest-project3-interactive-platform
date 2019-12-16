import React from 'react';

import NavBar from "./components/navbar/NavBar";
import Footer from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
  render() {
  return (
    <div className="App">
          <NavBar/>
          <Footer/>
    </div>
  );
 }
}

export default App;



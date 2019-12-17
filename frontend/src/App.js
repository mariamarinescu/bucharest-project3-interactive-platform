
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from "./components/navbar/NavBar";
import Footer from './components/footer/Footer';
import SingUp from './components/signup/SignUp'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Footer />
          <Switch>
            <Route path="/sign-up">
                <SingUp/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;



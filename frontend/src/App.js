import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import Nav from './components/homepage/homepage-components/navbar/NavBar';
import Footer from './components/homepage/homepage-components/footer/Footer'
import AdminPlatform from './components/admin/AdminPlatform';
import SignUp from './components/homepage/homepage-components/signup/SignUp';
import Login from './components/homepage/homepage-components/login/Login';
import Quiz from './components/homepage/homepage-components/quiz/Quiz';





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
      <Switch>
      <Route exact path="/" component={Homepage}/>

      </Switch>
      <Switch>
        <Route path="/admin" component={AdminPlatform}/>
      </Switch>
        

          {/* <Switch>
            <Route exact path="/" component={Homepage} />
            <Switch>
                        <Route path="/sign-up" component={SignUp} />
                    </Switch>
                    <Switch>
                        <Route path="/log-in" component={Login} />
                    </Switch>
                    <Switch>
                        <Route path="/quiz" component={Quiz} />
                    </Switch>
          </Switch>

          <Switch>
            <Route path="/admin" component={AdminPlatform}/>
          </Switch> */}
      </BrowserRouter>
        </div>
    );
  }

}


export default App;
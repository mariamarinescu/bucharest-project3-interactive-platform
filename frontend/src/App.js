import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Homepage from './components/homepage/Homepage';




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
<Route path="/" component= {Homepage}/>        
 <Route path="/admin" component={Admin} />
          {/* <Switch>
              <Route path="/admin" component={Admin} />
                    </Switch> */}
        </BrowserRouter>

      </div>
    );
  }

}


export default App;
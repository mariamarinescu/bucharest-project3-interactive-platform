import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AdminNav from './components/admin_nav/AdminNav'
;
ReactDOM.render(
<Router>
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/admin/editeaza-descrieri" component={App} />
        <Route exact path="/admin/editeaza-chestionar" component={App} />
    </div>
</Router>,

 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

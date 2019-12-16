import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminNav from './components/admin_nav/AdminNav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InfoCard from "./components/InfoCard/EditInfoCard";
import EditInfoCards from "./components/InfoCard/EditInfoCards";
import QCards from './components/quiz-cards//QCards'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <AdminNav />

        <Switch>

          <Route path='/admin/editeaza-descrieri'>
            <EditInfoCards />
          </Route>

          <Route path='/admin/editeaza-chestionar'>
            <QCards />
          </Route>

        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

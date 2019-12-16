import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminNav from './components/admin_nav/AdminNav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AdminNav />
      </BrowserRouter>
    </div>
  );
}

export default App;

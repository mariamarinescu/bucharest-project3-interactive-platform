import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InfoCard from "./components/InfoCard/EditInfoCard";
import EditInfoCards from "./components/InfoCard/EditInfoCards";

function App() {
  return (
    <div className="App">
     <InfoCard/>
     <EditInfoCards/>
    </div>
  );
}

export default App;

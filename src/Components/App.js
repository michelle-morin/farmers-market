import React from 'react';
import '../App.css';
import ProduceControl from "./Produce/ProduceControl"
import NavBar from "./Navigation/NavBar"
import LocationControl from "./Location/LocationControl"


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <LocationControl />
      <ProduceControl />
    </React.Fragment>
  );
}

export default App;
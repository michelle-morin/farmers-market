import React from 'react';
import '../App.css';
import ProduceControl from "./Produce/ProduceControl"
import NavBar from "./Navigation/NavBar"
import LocationControl from "./Location/LocationControl"

function App() {
  return (
    <React.Fragment>
      <div className="everything">
        <div className="navigation">
          <NavBar />
        </div>
        <div className="body">
          <LocationControl />
          <ProduceControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
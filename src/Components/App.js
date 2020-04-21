import React from 'react';
import '../App.css';
import ProduceControl from "./Produce/ProduceControl"
import Header from "./Shared/Header"
import Footer from "./Shared/Footer"

function App() {
  return (
    <React.Fragment>
      <Header />
      <ProduceControl/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
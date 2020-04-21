import React from "react";
import HomeButton from './HomeButton.js';

function NavBar(){
  return(
    <React.Fragment>
      <h1>Avery's Organics</h1>
      <HomeButton/>
    </React.Fragment>
  );
}

export default NavBar;
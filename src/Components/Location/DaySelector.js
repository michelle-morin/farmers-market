import React from 'react';
import { v4 } from 'uuid';

function DaySelector(){
  function handleNewDateSelection(event){
    event.preventDefault();
    console.log(event.target.name.value);
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewDateSelection}>
        <select name="day">
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="0">Sunday</option>
        </select>
        <button type="submit">SUBMIT</button> 
      </form>
    </React.Fragment>
  )
}

export default DaySelector;
import React from "react";
// import Header from "./Header";
// import DropDown from './DropDown.js';
// import ProduceList from "./ProduceList";
import { availableProduce } from "../../Pre-Populated-Data/SeasonalProduce";

class ProduceControl extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      monthObject: availableProduce[0]
      // List: availableProduce,
      //month: may
    }
  }

  render(){
    // this.setState({property: update})
    // this.setState(monthObject) = dropdownselection
    // const produceSelections = monthObject.selection;
    // const monthName = monthObject.month;
    return(
      <React.Fragment>
        
        {
        // <ProduceList produceSelections={monthObject.selection}
        //   monthName={monthObject.month} />
        }
      </React.Fragment>
    );
  }
}

export default ProduceControl;
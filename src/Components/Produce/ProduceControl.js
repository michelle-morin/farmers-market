import React from "react";
import ProduceList from "./ProduceList";
import { availableProduce } from "../../Pre-Populated-Data/AvailableProduce";

class ProduceControl extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      monthSelected: 0,
      month: availableProduce[0].month,
      monthlyProduce: availableProduce[0].selection
    }
  }  

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({monthSelected: event.target.value, month: availableProduce[event.target.value].month, monthlyProduce: availableProduce[event.target.value].selection});
  }

  render(){

    return(
      <React.Fragment>
        <div className="produce-box">
          <form>
            <select value={this.state.monthSelected} onChange={this.handleSubmit}>
              <option value="0">January</option>
              <option value="1">Febuary</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
          </form>
          <ProduceList currentMonth={this.state.month}
          produceList={this.state.monthlyProduce} />
        </div>
      </React.Fragment>
    );
  }
}

export default ProduceControl;
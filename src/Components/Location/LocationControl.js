import React from 'react';
import LocationDetails from './LocationDetails.js';
import { marketSchedule } from '../../Pre-Populated-Data/MarketSchedule.js';

class LocationControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dateSelected: 0,
      currentMarketLocation: marketSchedule[0]
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({dateSelected: event.target.value, currentMarketLocation: marketSchedule[event.target.value]});
  }  
  
  render(){

    return(
      <React.Fragment>
        <div className="location-box">
          <form>
            <select value={this.state.dateSelected} onChange={this.handleSubmit}>
              <option value="0">Sunday</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Saturday</option>
            </select>
          </form>
          <LocationDetails 
          day={this.state.currentMarketLocation.day}
          location={this.state.currentMarketLocation.location}
          hours={this.state.currentMarketLocation.hours}
          booth={this.state.currentMarketLocation.booth} />
        </div>
      </React.Fragment>
    );
  }
}

export default LocationControl;
import React from 'react';
import LocationDetails from './LocationDetails.js';

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
];

class LocationControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dateSelected: 0,
      currentMarketLocation: marketSchedule[0]
    }
  }

  handleDeterminingLocation = (event) => {
    event.preventDefault();
    console.log("BURN IT ALL!!!!!");
  }

  handleSubmit = (event) => {
    this.setState({dateSelected: event.target.value, currentMarketLocation: marketSchedule[event.target.value]});
  }  
  
  render(){

    return(
      <React.Fragment>
        <form onSubmit={this.handleDeterminingLocation}>
          <select value={this.state.dateSelected} onChange={this.handleSubmit} name="date">
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
      </React.Fragment>
    );
  }
}

export default LocationControl;
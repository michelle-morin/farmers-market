import React from 'react';
// import DaySelector from './DaySelector.js';
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

  handleDeterminingLocation = (day, event) => {
    event.preventDefault();
    this.setState({dateSelected: day});
    this.setState({currentMarketLocation: marketSchedule[this.state.dateSelected]});
  }  
  
  render(){
    return(
      <React.Fragment>
        <form onSubmit={this.handleDeterminingLocation}>
          <select name="day">
            <option value="0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
        <LocationDetails day={this.state.currentMarketLocation.day}
        location={this.state.currentMarketLocation.location}
        hours={this.state.currentMarketLocation.hours}
        booth={this.state.currentMarketLocation.booth} />
      </React.Fragment>
    );
  }
}

export default LocationControl;
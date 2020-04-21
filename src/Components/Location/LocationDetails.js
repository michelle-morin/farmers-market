import React from 'react';
import PropTypes from 'prop-types';


function LocationDetails(props){
  return (
    <React.Fragment>
      <h1>{props.day}</h1>
      <p>Address: {props.location}</p>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
    </React.Fragment>
  );
}

LocationDetails.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

export default LocationDetails;
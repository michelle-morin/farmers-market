import React from 'react';
import PropTypes from 'prop-types';

function LocationDetails(props){
  return (
    <React.Fragment>
      <h1>{props.day}'s Market Location</h1>
      <p>Address: {props.location}</p>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
      <div className="image">
        <img src="https://i.imgur.com/g9K1gc0.jpg" alt="photo of a bird"></img>
      </div>
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
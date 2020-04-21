import React from "react";
import PropTypes from "prop-types";

// dropdown menu with each menu item having value from 0-11 and then that number is a prop of produce list availableProduce, number

function ProduceList(props){
  return(
    <React.Fragment>
      <h2>{props.month}</h2>
      <ul>
        {
        //   props.produceSelections.map((produceItem) => {
        //   <li>{produceItem}</li>
        // })
      }
      </ul>
    </React.Fragment>
  );
}

ProduceList.propTypes = {
  month: PropTypes.object
}

export default ProduceList;
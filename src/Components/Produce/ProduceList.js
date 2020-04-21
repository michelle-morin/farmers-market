import React from "react";
import PropTypes from "prop-types";

function ProduceList(props){
  return(
    <React.Fragment>
      <h1>{props.currentMonth}</h1>
        {
          props.produceList.map((produceItem) => <li>{produceItem}</li>)
        }
    </React.Fragment>
  );
}

ProduceList.propTypes = {
  currentMonth: PropTypes.string,
  produceList: PropTypes.arrayOf(PropTypes.string)
}

export default ProduceList;
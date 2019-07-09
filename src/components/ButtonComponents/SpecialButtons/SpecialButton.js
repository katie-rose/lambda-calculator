import React from "react";
import "../../../App.scss";

/* Display a button element rendering the data being passed down from the parent container on props */

const SpecialButton = props => {
  return (
    <>
      <button className="button" onClick={props.clearDisplay}>
        {props.special}
      </button>
    </>
  );
};

export default SpecialButton;

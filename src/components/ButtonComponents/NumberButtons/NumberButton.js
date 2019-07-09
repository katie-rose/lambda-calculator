import React from "react";
import "../../../App.scss";

/* Display a button element rendering the data being passed down from the parent container on props */

const NumberButton = props => {
  return (
    <>
      <button
        className="button"
        onClick={() => {
          props.setNumber(props.number);
        }}
      >
        {props.number}
      </button>
    </>
  );
};

export default NumberButton;

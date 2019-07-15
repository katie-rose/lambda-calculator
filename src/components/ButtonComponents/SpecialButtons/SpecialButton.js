import React from "react";
import "../../../App.scss";

/* Display a button element rendering the data being passed down from the parent container on props */

const SpecialButton = (props) => {
  return (
    <>
      <button
        onClick={() => props.update(props.special)}
        className="button"
      >
        {props.special}
      </button>
    </>
  );
};

export default SpecialButton;

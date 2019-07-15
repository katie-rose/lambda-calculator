import React from "react";

/* Display a button element rendering the data being passed down from the parent container on props */

const OperatorButton = props => {
  return (
    <>
      <button
        onClick={() => props.update(props.operator.value)}
        className="button"
      >
        {props.operator.value}
      </button>
    </>
  );
};

export default OperatorButton;

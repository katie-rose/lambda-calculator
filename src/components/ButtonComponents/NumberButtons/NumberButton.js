import React from "react";
import "../../../App.scss";

/* Display a button element rendering the data being passed down from the parent container on props */

const NumberButton = props => {
  return (
    <>
     {props.number === '0' ? <button onClick={() => props.update(props.number)} className='button'>{props.number}</button> :  <button onClick={() => props.update(props.number)}  className='button'>{props.number}</button>}
    </>
  );
};

export default NumberButton;

import React from "react";
import "../../App.scss";

const Display = (props) => {
  return (
    <div className="display">
      <p className="display-text">{props.calcDisplay}</p>
    </div>
  );
};

export default Display;

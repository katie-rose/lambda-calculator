import React, { useState } from "react";
import { operators } from "../../../data.js";
import "../../../App.scss";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operatorsList, setOperator] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorsList.map(oper => (
        <OperatorButton operator={oper} update={props.update} />
      ))}
    </div>
  );
};

export default Operators;

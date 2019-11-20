import React from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // const [operateState, setOperateState] = useState(operators);
  // console.log(operateState)
  // STEP 2 - add the imported data to state
  

  return (
    <div className = "Operate">
      {  operators.map( (oper, i) => <OperatorButton oper = {oper} key = {i} changeDisplay = {props.changeDisplay} /> 
      )
        
      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
    }

    </div>
  );
}

export default Operators;
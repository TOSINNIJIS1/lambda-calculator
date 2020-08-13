import React from "react";

const OperatorButton = (props) => {
  console.log(props, 'Operator Button')
  return (
    <button onClick={() => props.handleClick(props.operators)}>
      {props.operators}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton
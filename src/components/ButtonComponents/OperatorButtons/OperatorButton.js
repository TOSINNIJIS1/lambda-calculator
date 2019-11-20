import React from "react";

const OperatorButton = (props) => {
  return (
    <button className = "btn operBtn" onClick={
      () => props.changeDisplay(props.oper.char)} >
      {props.oper.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};  

export default OperatorButton;
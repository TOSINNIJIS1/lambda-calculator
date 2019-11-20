import React from "react";


const SpecialButton = (props) => {
  return (
    <button className="btn specButton" onClick={
      () => props.changeDisplay(props.spec)}>
      {props.spec}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;
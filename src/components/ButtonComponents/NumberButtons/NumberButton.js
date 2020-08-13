import React from "react";

const NumberButton = (props) => {
  console.log(props)
  return (

      <button onClick={() => props.handleClick(props.num)}>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        {props.num}
      </button>
  );
};

export default NumberButton
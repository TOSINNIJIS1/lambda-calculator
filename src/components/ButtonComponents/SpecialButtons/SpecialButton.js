import React from "react";

const SpecialButton = (props) => {
  console.log(props.specials, 'special button')
  return (
    <button onClick={() => props.handleClick(props.specials)} >
      <div>
        {props.specials}

      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton
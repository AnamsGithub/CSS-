//event handling in functional component
import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
    //NOTE: onClick event handler  is a funtion itself and NOT a function-Call
  );
}

export default FunctionClick;

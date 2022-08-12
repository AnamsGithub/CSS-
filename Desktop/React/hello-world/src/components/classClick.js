//event handling in class component
import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Clicked button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me</button>
      </div>
      //NOTE: onClick event handler  is a method itself and NOT a method-Call--means no parentheis '()' to be used ahead of method name
    );
  }
}

export default ClassClick;

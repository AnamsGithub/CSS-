//setState in class
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    //NOTE: this.state.count++; ---DONT USE----

    //this.setState(
    //   {
    //     count: this.state.count + 1,
    //   }
    // );  -------HAS DRAWBACK--WONT WORK WITH MULTIPLE ARGUMENT TOGETHER--------

    // ---------CORRECT WAY---------
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>increment</button>
      </div>
    );
  }
}

export default Counter;

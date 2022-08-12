//State in class
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visiter",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thankyou for subscribing!",
    });
  }
  render() {
    //NOTE: DE-STRUCTURING states ---"const {state1, state2} = this.state"------and later just use state1/state2 instead of writing this.state.state1/this.state.state2
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;

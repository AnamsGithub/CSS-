import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext, { UserConsumer } from "./UserContext";

class ComponentB extends Component {
  render() {
    return (
      <div>
        Comp B context {this.context}
        <ComponentC />
      </div>
    );
  }
}
ComponentB.contextType = UserContext;
export default ComponentB;

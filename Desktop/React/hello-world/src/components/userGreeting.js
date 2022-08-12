//CONDIITIONAL STATEMENTS (IF-ELSE)
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //NOTE: METHOD---1
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Anam</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // NOTE: METHOD---2
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Anam</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return message;
    //NOTE: METHOD---3
    return this.state.isLoggedIn ? (
      <div>Welcome Anam</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreeting;

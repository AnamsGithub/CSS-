import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    this.setState({
      message: "GoodBye",
    });
  }

  render() {
    return (
      <div>
        {/* NOTE:--'onClick ={this.clickHandler}' wont work, '.bind(this)' HAS to be used */}

        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>

        {/* OR USE ARROW FUNCTION */}

        {/* <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          Click
        </button> */}
      </div>
    );

    //
  }
}

export default EventBind;

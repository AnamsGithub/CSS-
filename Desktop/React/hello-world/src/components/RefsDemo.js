import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    //METHOD 1----createRef approach
    this.inputRef = React.createRef();

    //METHOD 2----callback approach
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    //METHOD 1----createRef approach
    // this.inputRef.current.focus();
    // console.log(this.inputRef);

    //METHOD 2----callback approach
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  clickHandler = () => {
    alert(`${this.inputRef.current.value} , ${this.cbRef.value}`);
  };
  render() {
    return (
      <div>
        {/* METHOD 1----createRef approach */}
        <input type="text" ref={this.inputRef}></input>

        {/* METHOD 2----callback approach */}
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;

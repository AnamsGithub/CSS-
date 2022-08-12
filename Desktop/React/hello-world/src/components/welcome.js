//class component
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //NOTE: we can write inside render body --"const{name,heroName} = this.props"--and then later use just 'name'/'heroName' instead of 'props.name'/'props.heroName'----DE-STRUCTURING props
    return (
      <h1>
        Welcome {this.props.name}, {this.props.heroName}
      </h1>
    );
  }
}
export default Welcome;

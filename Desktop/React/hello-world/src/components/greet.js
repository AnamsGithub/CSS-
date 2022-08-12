//functional component
import React from "react";

// function Greet() {
//   return <h1>Hello Anam</h1>;
// }

const Greet = (props) => {
  //NOTE: instead of (props), we can write (name, job) and later use just 'name'/'job' instead of 'props.name'/'props.job'---DE-STRUCTURING props in PARAMETER
  //---OR----
  //we can pass (props) only as parameter and inside the function we can write---"const {name, job} = props"------and use 'name'/'job' later in funtion--------DE-STRUCTURING props in BODY

  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name}, {props.job}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;

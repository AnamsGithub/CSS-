import React from "react";

const heading = {
  fontSize: "72px",
  color: "goldenrod",
};

function Inline() {
  return (
    <div>
      <h3 className="error">Error inline</h3>
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;

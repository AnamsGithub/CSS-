import React from "react";

function NameList() {
  const names = ["Ron", "Jane", "Luna"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name.toLocaleUpperCase()}</h2>
      ))}
    </div>
  );
}

export default NameList;

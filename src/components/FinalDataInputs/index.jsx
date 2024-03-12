import React from "react";

function FinalDataInputs(props) {
  return (
    <div>
      <label>your name is : </label>
      <input type="text" value={props.name} disabled={true} />
    </div>
  );
}

export default FinalDataInputs;

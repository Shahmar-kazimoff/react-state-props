import React from "react";

function TakeDataInput(props) {
    return (
        <div>
            <label>{props.value} : </label>
            <input
                type="text"
                onChange={props.takeInputNameData || props.takeInfoData || props.takeSurnameData || props.takeAgeData}
            />


        </div>
    );
}

export default TakeDataInput;

import React from "react";
import Input from "../TakeDataInput/index.jsx";

function DataForm(props) {
    return (
        <div className="dataForm">
            <form action="">
                <Input value={"enter your Name"} takeInputNameData={props.takeInputNameData} />
                <Input value={"enter your Surname"} takeSurnameData={props.takeSurnameData} />
                <Input value={"enter your info"} takeInfoData={props.takeInfoData} />
                <Input value={"enter your Age"} takeAgeData={props.takeAgeData} />
            </form>
        </div>
    );
}

export default DataForm;

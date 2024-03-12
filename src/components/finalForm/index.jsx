import React from "react";

function Form(props) {
    return (
        <div>

            <h1>Name :{props.firstnameInput}</h1>
            <h1>Surname :{props.surnameInput}</h1>
            <h1>Info :{props.infoInput}</h1>
            <h1>Age :{props.ageInput}</h1>
        </div>
    );
}

export default Form;

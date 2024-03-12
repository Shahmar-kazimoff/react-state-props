import Form from "./components/finalForm/index.jsx";
import DataForm from "./components/DataForm/index.jsx";
import { useState } from "react";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [infoInput, setInfoInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  
  
  function takeInputNameData(e) {
    setNameInput(e.target.value);
  }

  function takeSurnameData(e) {
    setSurnameInput(e.target.value);
  }

  function takeInfoData(e) {
    setInfoInput(e.target.value);
  }

  function takeAgeData(e) {
    setAgeInput(e.target.value);
  }

  return (
    <div>
      <DataForm
        takeInputNameData={takeInputNameData}
        takeSurnameData={takeSurnameData}
        takeInfoData={takeInfoData}
        takeAgeData={takeAgeData}
      />
      <Form
        firstnameInput={nameInput}
        surnameInput={surnameInput}
        infoInput={infoInput}
        ageInput={ageInput}
      />
    </div>
  );
}

export default App;

import Form from './Form';
import { useState } from 'react';
import "./App.css"

function App() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    info: "",
    age: "",
    gender: ""
  });

  const handleChange = () => {
    setFormData({ name: "Shahmar", surname: "Kazimov", info: "Developer", age: "30", gender: "Man" });
  }

  return (
    <div className="app">
      <Form formData={formData} />
      <button className='changeButton' onClick={handleChange}>Change</button>
    </div>
  );
}

export default App;

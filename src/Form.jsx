import React from 'react'
import Name from "./Name";
import Surname from "./Surname";
import Info from "./Info";
import Age from "./Age";
import Gender from "./Gender";

const Form = ({ formData }) => {
  return (
    <div className='allInputs'>
      <Name formData={formData} />
      <Surname formData={formData} />
      <Info formData={formData} />
      <Age formData={formData} />
      <Gender formData={formData} />
    </div>
  )
}

export default Form
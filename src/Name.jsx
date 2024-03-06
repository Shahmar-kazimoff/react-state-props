import React from 'react';

const Name = ({ formData, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="Name">Name: </label>
      <input
        className='input'
        type='text'
        value={formData.name}
        onChange={handleChange}
      />
    </div>
  );
}

export default Name;

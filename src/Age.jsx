import React from 'react';

const Age = ({ formData, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label htmlFor="Age">Age: </label>
            <input
                className='input'
                type='text'
                value={formData.age}
                onChange={handleChange}
            />
        </div>
    );
}

export default Age;

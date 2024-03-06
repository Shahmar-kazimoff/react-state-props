import React from 'react';

const Gender = ({ formData, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label htmlFor="Gender">Gender: </label>
            <input
                className='input'
                type='text'
                value={formData.gender}
                onChange={handleChange}
            />
        </div>
    );
}

export default Gender;

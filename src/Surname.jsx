import React from 'react';

const Surname = ({ formData, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label htmlFor="Surname">Surname: </label>
            <input
                className='input'
                type='text'
                value={formData.surname}
                onChange={handleChange}
            />
        </div>
    );
}

export default Surname;

import React from 'react';

const Info = ({ formData, onChange }) => {
    const handleCgange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label htmlFor="Info">Info: </label>
            <input
                className='input'
                type='text'
                value={formData.info}
                onChange={handleCgange}
            />
        </div>
    );
}

export default Info;

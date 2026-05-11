import React from 'react';

function Input({ type = 'text', placeholder, value, onChange, required = false, className = '', label }) {
    return (
        <div className={`input-wrapper ${className}`}>
            {label && <label className="input-label">{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="input"
            />
        </div>
    );
}

export default Input;

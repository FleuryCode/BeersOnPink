import React from "react";
import './customInput.styles.scss';

const CustomInput = ({ id, type, name, placeholder, value, onChange }) => {
    return (
        <div className="customInputContainer">
            <input required className="inputField" id={id} type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    );
}

export default CustomInput;
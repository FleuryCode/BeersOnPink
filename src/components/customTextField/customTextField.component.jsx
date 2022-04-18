import React from "react";
import './customTextField.styles.scss';

const CustomTextField = ({ id, name, placeholder, value, onChange }) => {
    return (
        <div className="textFieldContainer">
            <textarea onChange={onChange} required name={name} id={id} placeholder={placeholder} value={value}></textarea>
        </div>
    );
}

export default CustomTextField;
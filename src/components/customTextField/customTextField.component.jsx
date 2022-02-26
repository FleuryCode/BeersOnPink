import React from "react";
import './customTextField.styles.scss';

const CustomTextField = ({id, name, placeholder}) => {
    return(
        <div className="textFieldContainer">
            <textarea required name={name} id={id} placeholder={placeholder}></textarea>
        </div>
    );
}

export default CustomTextField;
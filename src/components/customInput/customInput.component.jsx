import React from "react";
import './customInput.styles.scss';

const CustomInput = ({id,type, name, placeholder, onChange}) => {
    return(
        <div className="customInputContainer">
            <input id={id} type={type} name={name} placeholder={placeholder} />
        </div>
    );
}

export default CustomInput;
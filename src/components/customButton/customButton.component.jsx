import React from "react";
import './customButton.styles.scss';

const CustomButton = ({staticMessage, onClick, page}) => {
    return(
        <div className="customButtonContainer contactButton">
            {staticMessage}
        </div>
    );
}

export default CustomButton;
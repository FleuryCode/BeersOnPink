import React from "react";
import './customButton.styles.scss';

const CustomButton = ({ staticMessage, onClick, page, messageSending }) => {
    return (
        <div onClick={onClick} className="customButtonContainer contactButton">
            {
                messageSending ?
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                    :
                    <div>
                        {staticMessage}
                    </div>
            }


        </div>
    );
}

export default CustomButton;
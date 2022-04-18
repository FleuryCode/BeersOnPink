import React from "react";
import './sendArrowButton.styles.scss';
import { ReactComponent as SendIcon } from '../../assets/sendArrowIcon.svg';

const SendArrowButton = ({ onClick, messageSending }) => {
    return (
        <div onClick={onClick} className="sendArrowButtonContainer">
            {
                messageSending ?
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                    :
                    <SendIcon />
            }

        </div>
    );
}

export default SendArrowButton;
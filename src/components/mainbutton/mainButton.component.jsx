import React from "react";
import './mainButton.styles.scss';

const MainButton = () => {
    const amountRaised = 13576;
    const defaultInfo = `Amount Raised: $${Number(amountRaised).toLocaleString()}`;
    return(
        <div className="mainButtonContainer">
            <h5>{defaultInfo}</h5>
        </div>
    );
}

export default MainButton;
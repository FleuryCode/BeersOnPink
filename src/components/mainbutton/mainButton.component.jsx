import React, { useState } from "react";
import './mainButton.styles.scss';

const MainButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const amountRaised = 13576;
    const defaultInfo = `Amount Raised: $${Number(amountRaised).toLocaleString()}`;
    const hoverInfo = "Donate Now!";
    let displayInfo = '';
    if(!isHovered) {
        displayInfo = defaultInfo;
    } else {
        displayInfo = hoverInfo;
    }
    return (
        <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="mainButtonContainer">
            <h5>{displayInfo}</h5>
        </div>
    );
}

export default MainButton;
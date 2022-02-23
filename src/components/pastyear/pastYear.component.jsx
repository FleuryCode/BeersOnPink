import React from "react";
import './pastYear.styles.scss';
import SpecificPastYear from "../specific-pastyear/specific-pastYear.component";


const PastYear = () => {
    return (
        <div className="pastYearContainer">
            <SpecificPastYear year={2018} />
        </div>
    );
}

export default PastYear;
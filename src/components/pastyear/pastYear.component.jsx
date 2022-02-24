import React, { useState } from "react";
import './pastYear.styles.scss';
import SpecificPastYear from "../specific-pastyear/specific-pastYear.component";


const PastYear = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const years = [2019, 2018, 2017, 2016];
    const updateIndex = (currentIndex) => {
        if (currentIndex < 0) {
            currentIndex = years.length - 1;
        } else if (currentIndex >= years.length) {
            currentIndex = 0;
        }

        setActiveIndex(currentIndex);
    }
    return (
        <div className="pastYearContainer">
            <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {
                    years.map((year, index) => (
                        <SpecificPastYear key={index} year={year} />
                        
                    ))
                }
            </div>
            <div className="indicators">
                {
                    years.map((year, index) => (
                        <button key={year} className={`${(index === activeIndex) ? 'activeButton' : ''}`} onClick={() => updateIndex(index)}></button>
                    ))
                }
            </div>
        </div>
    );
}

export default PastYear;
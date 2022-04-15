import React from "react";
import './pastyears.styles.scss';

const PastYears = () => {
    return (
        <div className="pastYearsContainer container-fluid" >
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-5">
                    <div className="container2019">
                        <h2>2019</h2>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="container2018">
                        <h2>2018</h2>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="container2017">
                        <h2>2017</h2>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="container2016">
                        <h2>2016</h2>
                    </div>
                </div>
            </div>
        </div >
    );

}

export default PastYears;
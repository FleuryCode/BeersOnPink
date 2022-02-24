import React from "react";
import './jumbotron.styles.scss';
import BoPSlogan from '../../assets/bopSlogan.svg';
import MainButton from "../mainbutton/mainButton.component";

const Jumbotron = () => {
    return (
        <div className="jumbotronContainer container-fluid">
            <div className="row">
                <div className="col-4">
                    <MainButton />
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
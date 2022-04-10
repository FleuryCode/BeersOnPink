import React from "react";
import './jumbotron.styles.scss';
import BoPSlogan from '../../assets/bopSlogan.svg';
import MainButton from '../mainbutton/mainButton.component';

const Jumbotron = () => {
    return (
        <div className="jumbotronContainer container-fluid">
            <div className="row mainInfo">
                <div className="col-10 col-md-5">
                    <img src={BoPSlogan} alt="Main slogan" />
                    <MainButton />
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
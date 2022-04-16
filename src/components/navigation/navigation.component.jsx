import React from "react";
import './navigation.styles.scss';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigationContainer container-fluid d-none d-md-block">
            <div className="row">
                <nav className="col-12 nav-container">
                    <Link className="nav-item" to={'/'}>Home</Link>
                    <Link className="nav-item" to={'/about'}>About</Link>
                    <Link className="nav-item" to={'/auction'}>Auction</Link>
                    <Link className="nav-item" to={'/donate'}>Donate</Link>
                    <Link className="nav-item" to={'/#pastyears'}>Past Years</Link>
                    <Link className="nav-item" to={'/#contact'}>Contact</Link>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;
import React from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';
import InstaLogo from '../../assets/bopInstaLogo.svg';
import MailLogo from '../../assets/bopMailLogo.svg';

const Footer = () => {
    return (
        <div className="footerContainer container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-8">
                    <div className="footerNav">
                        <Link className='footerNavLink' to={'/'}>Home</Link>
                        <Link className='footerNavLink' to={'/about'}>About</Link>
                        <Link className='footerNavLink' to={'/auction'}>Auction</Link>
                        <Link className='footerNavLink' to={'/donate'}>Donate</Link>
                        <Link className='footerNavLink' to={'/#pastyears'}>Past Years</Link>
                        <Link className='footerNavLink' to={'/#contact'}>Contact</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="socialLogos">
                        <a href="https://www.instagram.com/beersonpink/">
                            <img src={InstaLogo} alt="Instagram Logo" />
                        </a>
                        <a href="mailto:julien@fleuryphotography.com">
                            <img src={MailLogo} alt="Email icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className='text-center my-3'>&copy; 2022 Beers on Pink</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
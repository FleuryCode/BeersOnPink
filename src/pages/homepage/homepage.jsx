import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactForm from '../../components/contactForm/contactForm.component';
import Footer from '../../components/footer/footer.component';
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import PastYear from '../../components/pastYear/pastYear.component';
import './homepage.styles.scss';

const Homepage = () => {
    // SEO DATA
    useEffect(() => {
        document.title = "Beers on Pink | Breast Cancer Fundraiser";
        document.querySelector('meta[name="description"]').setAttribute("content", "Beers on Pink is a breast cancer fundraiser. Originally started by Julien Fleury in Austin, Texas as a way to raise funds through his photography of craft beer. Beers on Pink became an annual event that featured craft brewery beers photographed on a pink background, after the images were auctioned off to raise money. Now transitioning to Nice, France!");
    },[]);
    // Setting up AutoScroll
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        };
    }, [location]);
    return (
        <div className="homepageContainer container-fluid p-0">
            <div className="row">
                <div className="col-12">
                    <Jumbotron />
                </div>
            </div>
            <div className="row homepageInfo">
                <div className="col-12 my-3 d-flex justify-content-center">
                    <h2>ABOUT</h2>
                </div>
                <div className="col-12 col-md-4 infoBox">
                    <h4>Where does the money go?</h4>
                    <p>When Beers on Pink was hosted in the United States, all funds would be given to the National Breast Cancer Foundation. They are an organization that focuses on getting the funds to women (and men) to get tested early. The reason we picked an organization like this is because they are plenty devoted to research and less that are trying to get information...</p>
                </div>
                <div className="col-12 col-md-4 infoBox">
                    <h4>How it started</h4>
                    <p>Beers on Pink started with photographer Julien Fleury. His mother Christine Fleury had been diagnosed with stage four breast cancer. While taking care of his mother, Julien was trying to find ways of using his skills as a food and beverage photographer to help in any way he could. One day while having coffee with Rhodes Gibson, he came up with the idea of photographing a bunch of different local beers on a pink background. These images...</p>
                </div>
                <div className="col-12 col-md-4 infoBox">
                    <h4>How we raise money</h4>
                    <p>So how do we do it? How do we go from the photo of the beer to throwing an epic fundraiser and getting money to help others? Very simple really! Our photographer Julien takes 12 local breweries, photographs one beer chosen by the brewery, in a custom ceramic cup on a pink background. Custom prints are then made and auctioned off the night of the event along with the custom ceramic cups...</p>
                </div>
                <div className="col-3 me-auto ps-3">
                    <Link className='infoLink' to={'/about'}>More information</Link>
                </div>
            </div>
            <div className="row auctionContainer">
                <div className="col-12 mb-auto">
                    <h2>AUCTION</h2>
                </div>
                <div className="col-12 mb-auto">
                    <h3>No Current Auction</h3>
                    <h4>More information coming soon!</h4>
                </div>
            </div>
            <div className="row">
                <div id='pastyears' className="col-12 pastYearsContainer">
                    <h2>PAST YEARS</h2>
                </div>
                <div className="col-12 pb-4 px-4 pt-2">
                    <PastYear />
                </div>
            </div>
            <div id="contact" className="row contactContainer">
                <div className="col-12">
                    <ContactForm />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>


        </div>
    );
}

export default Homepage;
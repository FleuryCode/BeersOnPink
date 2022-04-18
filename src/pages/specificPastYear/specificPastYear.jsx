import React, { useEffect, useState } from "react";
import './specificPastYear.styles.scss';
import { Link, useLocation } from "react-router-dom";
import { Bop2019, Bop2018, Bop2017, Bop2016 } from "../../assets/pastYears/ImageArrays";

const SpecificPastYearPage = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const [displayModule, setDisplayModule] = useState(false);
    const location = useLocation().pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    let images = [];
    let imageFolder = null;
    let activeYear = null;

    switch (location) {
        case '/pastyear/2019':
            imageFolder = Bop2019;
            activeYear = 2019;
            break;
        case '/pastyear/2018':
            imageFolder = Bop2018;
            activeYear = 2018;
            break;
        case '/pastyear/2017':
            imageFolder = Bop2017;
            activeYear = 2017;
            break;
        case '/pastyear/2016':
            imageFolder = Bop2016;
            activeYear = 2016;
            break;
        default:
            break;
    }

    // SEO DATA
    useEffect(() => {
        document.title = `Beers on Pink | Year ${activeYear} Images`;
        document.querySelector('meta[name="description"]').setAttribute("content", `Beers on Pink images from the year ${activeYear}`);
    },[location]);

    let keys = Object.keys(imageFolder);
    keys.forEach((key) => {
        images.push(imageFolder[key]);
    });

    const onImageClick = (image) => {
        setSelectedImage(image);
        setDisplayModule(true);
    }
    return (
        <div className="specificPastYearPageContainer container-fluid">
            <div onClick={() => setDisplayModule(false)} className={`${displayModule ? 'd-flex' : 'd-none'} selectedImageModule`}>
                <div className="imageModule">
                    <img className="" src={selectedImage} alt="" />
                </div>


            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="yearNavigation">
                        <Link className={`${(activeYear === 2019) ? 'activeYear' : ''} yearNavLink`} to={'/pastyear/2019'}>2019</Link>
                        <Link className={`${(activeYear === 2018) ? 'activeYear' : ''} yearNavLink`} to={'/pastyear/2018'}>2018</Link>
                        <Link className={`${(activeYear === 2017) ? 'activeYear' : ''} yearNavLink`} to={'/pastyear/2017'}>2017</Link>
                        <Link className={`${(activeYear === 2016) ? 'activeYear' : ''} yearNavLink`} to={'/pastyear/2016'}>2016</Link>
                    </div>
                </div>
            </div>
            <div className="row py-4">
                {
                    images.map((image, index) => (
                        <div key={index} className="col-12 col-md-4 imageHolder">
                            <img onClick={() => onImageClick(image)} src={image} alt="Beers on Pink Gallery" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SpecificPastYearPage;
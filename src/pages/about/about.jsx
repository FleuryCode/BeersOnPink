import React, { useEffect } from "react";
import './about.styles.scss';
import JFleuryProfile from '../../assets/jfleuryProfile.jpg';
import Footer from '../../components/footer/footer.component';
import { useLocation } from "react-router-dom";

const About = () => {
    // SEO DATA
    useEffect(() => {
        document.querySelector('meta[name="description"]').setAttribute("content", "About Beers on Pink. How it was started by Julien Fleury, how we raise money to help support the brave people fighting breast cancer every day and all the information about where the money goes.");
        document.title = "About Beers on Pink";
    },[]);
    const location = useLocation().pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div className="aboutContainer container-fluid">
            <div className="row">
                <div className="col-12 aboutHeader">
                    <h1>What is<br />Beers on <span>Pink</span>?</h1>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-12 col-md-7">
                    <h2>HOW IT STARTED</h2>
                    <p>Beers on Pink started with photographer Julien Fleury. His mother Christine Fleury had been diagnosed with stage four breast cancer. While taking care of his mother, Julien was trying to find ways of using his skills as a food and beverage photographer to help in any way he could. One day while having coffee with Rhodes Gibson, he came up with the idea of photographing a bunch of different local beers on a pink background. These images would then be printed and auctioned off during an annual event. About 5 months after that first discussion the very first Beers on Pink took place in Austin, Texas in 2016. As the years went on, more and more people have gotten interested in participating (thank you again to all the amazing breweries out there that made it possible). Now being based in France, we hope we can get the same type of enthusiasm that was received in the incredibly beer friendly Austin.</p>
                </div>
                <div className="col-12 col-md-4 ms-auto">
                    <div className="container">
                        <div className="row mt-4 mt-md-0">
                            <div className="col-4 col-md-12">
                                <a className="julienName" href="https://fleuryphotography.com" target={'_blank'}><h4>Julien Fleury</h4></a>
                                <h5>Creator/Photographer</h5>
                            </div>
                            <div className="col-6 col-md-12 ms-auto">
                                <div className="profilePicContainer">
                                    <img src={JFleuryProfile} alt="Julien Fleury profile" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-5 p-4">
                    <h2 className="text-center mb-3">HOW WE RAISE MONEY</h2>
                    <p>So how do we do it? How do we go from the photo of the beer to throwing an epic fundraiser and getting money to help others? Very simple really! Our photographer Julien takes 12 local breweries, photographs one beer chosen by the brewery, in a custom ceramic cup on a pink background. Custom prints are then made and auctioned off the night of the event along with the custom ceramic cups. In Austin there was also an encouraged $10 donation at the door and free refreshments provided by the breweries inside. All that equaled a lovely cause for drinking and a pause for cancer.
                        <br /><br />
                        Due to different laws in this new country, we are unsure how the event will proceed but we will absolutely have the silent auction as a part of it. More details on that as we get closer to the 2022 event.
                    </p>
                </div>
            </div>
            <div className="row whereDoesMoneyGoContainer p-5">
                <div className="col-12">
                    <h2>WHERE DOES THE MONEY GO?</h2>
                </div>
                <div className="col-12 col-md-4 p-3">
                    <p>When Beers on Pink was hosted in the United States, all funds would be given to the National Breast Cancer Foundation. They are an organization that focuses on getting the funds to women (and men) to get tested early. The reason we picked an organization like this is because they are plenty devoted to research and less that are trying to get information and care to people that need it. Early detection could be the key to saving someone's life or prolonging it so they can spend as much time with their loved ones as possible.</p>
                </div>
                <div className="col-12 col-md-4 p-3">
                    <p>We also ensure that all money that is raised is being sent to the organization. With the help of our awesome volunteers on the day of the event and all the people that work to help put it on, we are able to make that possible. Still being a smaller event helps us make sure all funds are being directed towards the people who need it most.
                    </p>
                </div>
                <div className="col-12 col-md-4 p-3">
                    <p>Now that we are based in Nice, France; we are looking for an organization or organizations to work with for this event. Our biggest concern is making sure that the money raised goes to helping people fighting breast cancer. We are still actively looking and if you wish to work with us, please contact us here.</p>
                </div>
            </div>
            <div className="row specialThanks p-5">
                <div className="col-12 d-flex justify-content-center">
                    <h2>A SPECIAL THANK YOU</h2>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <h4>Marie-Christine Fleury</h4>
                    <p>Christine was one of the most generous people out there. There was almost no end she wouldn't go to help somebody, she always put people before her. Especially her son. The biggest of thanks to this incredible person who lost her life to the horrible disease we are working so hard to beat. She was caring, giving and the best mom anyone could have hoped for in this world. We fight for you.
                    </p>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <h4>Rhodes Gibson</h4>
                    <p>Another thanks to Rhodes. This event would not be possible without him. From helping put everything together, to working the front door and making sure everyone was having a good time. Another beautiful person that lost their life to cancer. The event will always go on with you in our hearts. Your generosity will never be forgotten and your smile will always be missed.</p>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <h4>Samantha Heligman</h4>
                    <p>Finally, thank you Samantha. The incredible ceramic artist who the past two years of the Beers on Pink event really made it stand out. Her one of a kind work brought the final touch that was needed. We went from having people enjoy looking at images to being able to actually drink a delicious beer out of an incredible stein or goblet. Cheers to you and please drink an Austin Beerworks Pearl Snap for us from time to time.
                    </p>
                </div>
                <div className="col-12">
                    <h4 className="text-center">All the amazing breweries! <br /> We couldn't do it without you</h4>
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

export default About;
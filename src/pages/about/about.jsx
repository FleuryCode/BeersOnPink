import React from "react";
import './about.styles.scss';
import JFleuryProfile from '../../assets/jfleuryProfile.jpg';

const About = () => {
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quam est. Maxime expedita quod dignissimos laudantium sed iste odit enim cumque voluptas architecto ullam, tenetur eos hic quia sequi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt maiores at quam excepturi totam quo provident cupiditate, veritatis incidunt, ipsum facere qui nesciunt quas odit sapiente delectus! Iusto, magnam a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatem dolorem illum impedit tenetur cumque quidem, dolorum, tempora, ipsa temporibus amet minus rem quasi id perferendis maxime expedita voluptate. Possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officiis quas eaque ex ducimus. Rem, similique incidunt natus repudiandae assumenda minus sunt molestiae nostrum ullam doloremque dolore! Deleniti, quas rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus consectetur quos commodi animi, ullam explicabo enim ad praesentium provident. Totam deserunt sapiente sequi hic at nemo corrupti magnam quis dolorem.</p>
                </div>
                <div className="col-12 col-md-5">
                    <div className="aboutOwnerContainer px-3">
                        <div className="ownerTextInfo">
                            <h4>Julien Fleury</h4>
                            <h4>Creator/Photographer</h4>
                        </div>
                        <div className="ownerImageContainer">
                            <img src={JFleuryProfile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;
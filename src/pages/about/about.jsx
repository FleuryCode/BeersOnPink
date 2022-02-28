import React from "react";
import './about.styles.scss';

class About extends React.Component {
    render() {
        return(
            <div className="aboutContainer container-fluid">
                <div className="row">
                    <div className="col-12 aboutHeader">
                        <h1>What is<br/>Beers on <span>Pink</span>?</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
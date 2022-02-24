import React from 'react';
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import PastYear from '../../components/pastyear/pastYear.component';
import './homepage.styles.scss';

class Homepage extends React.Component {
    render() {
        return(
            <div className="homepageContainer">
                <h1>Home</h1>
                <Jumbotron />
                <PastYear />
            </div>
        );
    }
}

export default Homepage;
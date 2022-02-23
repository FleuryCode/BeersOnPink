import React from 'react';
import PastYear from '../../components/pastyear/pastYear.component';
import './homepage.styles.scss';

class Homepage extends React.Component {
    render() {
        return(
            <div className="homepageContainer">
                <h1>Home</h1>
                <PastYear />
            </div>
        );
    }
}

export default Homepage;
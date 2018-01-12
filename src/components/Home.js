import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <div className="HomeContainer">
            <h1>Player Scout</h1>
            <h2>Web App to keep track of your scouted players</h2>
            <Link to="/about" exact >Learn More</Link>
        </div>
    )
}

export default Home;

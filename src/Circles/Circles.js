import React from 'react';
import './Circles.css';

const Circles = () => {

    return (
        <div className="contain">
            <br />
            <nav className="spacing">
            <a className="circleContainer circle1" id="cirLink1" href="/About">About</a>
            <a className="circleContainer circle1" id="cirLink2" href="/Portfolio">Portfolio</a>
            <a className="circleContainer circle1" id="cirLink3" href="Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Circles;

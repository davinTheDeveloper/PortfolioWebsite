import React from 'react';
import { Link } from 'react-router-dom';
import './Circles.css';

const Circles = () => {

    return (
        <div className="contain">
            <br />
            <nav className="spacing">
            <Link className="circleContainer circle1" id="cirLink1" to="/About">About</Link>
            <Link className="circleContainer circle1" id="cirLink2" to="/Portfolio">Portfolio</Link>
            <Link className="circleContainer circle1" id="cirLink3" to="Contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Circles;
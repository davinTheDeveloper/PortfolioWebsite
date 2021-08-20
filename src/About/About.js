import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="AboutColor">
            <div className="aboutHeader">
                <h1 className="aboutTitle">About</h1>
                <Link to="/Home" className="HomeBtn">Home</Link>
            </div>
            <div className="aboutContain">
                <div className="aboutComment">What the heck is a Davin Henrik?</div>
                <div className="aboutCommentSpace"></div>
                </div>
            <nav className="navAboutSpacing">
            </nav>
            <div className="AboutColor" id="aboutFooter">
                *** This page is under construction ***
            </div>
        </div>
    );
}

export default About;


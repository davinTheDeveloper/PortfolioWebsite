import React from 'react';
import './About.css';

function About() {
    return (
        <div className="AboutColor">
            <div className="aboutHeader">
                <h1 className="aboutTitle">About</h1>
                <a href="/Home" className="HomeBtn">Home</a>
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


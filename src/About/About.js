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
            <nav className="textAboutSpacing">I'm a Software Developer who is proficient in multiple development languages.
            <br /> I am a glass half full person who enjoys building professional relationships with others. 
            <br /> During COVID my job ended and I became a stay-at-home dad for my two kids. 
            <br />It was at this time I decided to invest in my passion for web development. 
            <br />Between joining a coding bootcamp, self-teaching, and finally working with a mentor,
            <br /> I am ready to start my new profession as a Software Developer.

            </nav>
            <div className="AboutColor" id="aboutFooter">
                
            </div>
        </div>
    );
}

export default About;


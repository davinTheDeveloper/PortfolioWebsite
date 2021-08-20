import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="backColor">
            <div className="Header">
                <h1 className="headerTitle">Portfolio</h1>
                <div className="buffer"></div>
                <div className="linkRespSpace">
                <Link to="/Home" className="homeBtn">Home</Link>
                <div className="linkSpace"></div>
                <Link to="https://docs.google.com/document/d/1aEOacQc7OyeAN9hIdmm2ElAZ8FuzaqAeH1slhmeYG3Y/edit?usp=sharing" target="_blank" rel="noreferrer" className="cvBtn">CV/Resume</Link>
                </div>
                </div>
                <div className="commentContainer">
                <div className="commentSpace">
                </div>
            <div className="comments">
                <p className="comment">Note:</p>
                <p className="comment">The below projects showcase my current skill/abilities as a developer. 
                    As I continually grow my skill set, I start projects that I am personally interested.</p>
                <p className="comment">This keeps me motivated to learn more languages and push through the learning curve to complete each project. Please click on each project's link to view in your browser.</p>
                <p className="comment">Thanks!</p>
            </div>
            <div className="commentEndSpace"></div>
            </div>
            <div className="fit">
                <div className="container1">
                <h2 className="title1">Non-Profit Template</h2>
                    <li className="try">React, CSS, HTML5</li>
                    <li>Landing page w/ working hamburger</li>
                    <li>Easy navigation / Caring 1st impression</li>
                <div className="imgContainer1">
            <Link className="image1" to="https://davinthedeveloper.github.io/nonprofitTemplate/" target="_blank" rel="noreferrer">
            </Link>
            </div>
            </div>
            <div className="container2">
            <h2 className="title2">Pomodoro Timer</h2>
                <li>React, CSS, HTML5</li>
                <li>Play/Pause/Stop Buttons</li>
                <li>Adjustable Time</li>
                <li>Counter display</li>
                <li>Graphical Bar representing time passed</li>
            <div className="imgContainer2">
            <Link className="image2" to="https://davinthedeveloper.github.io/pomodoro/" target="_blank" rel="noreferrer">
            </Link>
            </div>
            </div>
            <div className="container3">
            <h2 className="title3">Matching Characters</h2>
                <li>Javascript, CSS, HTML5</li>
                <li>Children's game (3-5yrs)</li>
                <li>Generates a random letter and number</li>
                <li>Find and input those characters</li>
                <li>Code checks for matches and letter case</li>
            <div className="imgContainer3">
            <Link className="image3" to="https://davinthedeveloper.github.io/compareCharacters.github.io/" target="_blank" rel="noreferrer">
            </Link>
            </div>
            </div>
            </div>
            <div className="backColor" id="portfolioFooter">
            </div>
        </div>
    )
}

export default Portfolio;

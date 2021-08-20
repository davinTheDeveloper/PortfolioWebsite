import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';


const Contact = () => {
    return (
        <div className="backgColor">
            <div className="contactHeader">
                <h1 className="contactTitle">Contact</h1>
                <Link to="/Home" className="homeButton">Home</Link>
            </div>
            <div className="commentContain">
                <div className="contactComment">Thanks for reviewing my page!</div>
                <div className="contactCommentSpace"></div>
                <div className="contactComment">Let me know what you thought!</div>
                </div>
            <nav className="navContactSpacing">
                <Link to="https://github.com/davinTheDeveloper" target="_blank" rel="noreferrer noopener" className="emailLink">
                </Link>
                <Link to="https://www.linkedin.com/in/davinhenrik/" target="_blank" rel="noreferrer noopener" className="gitLink">
                </Link>
                <Link to="mailto:davin.henrik@gmail.com" target="_blank" rel="noreferrer noopener" className="linkedinLink">
                </Link>
            </nav>
            <div className="backgColor" id="contactFooter">

            </div>
        </div>
    )
}

export default Contact;

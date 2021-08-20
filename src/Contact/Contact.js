React from 'react';
import './Contact.css';


function Contact() {
    return (
        <div className="backgColor">
            <div className="contactHeader">
                <h1 className="contactTitle">Contact</h1>
                <a href="/Home" className="homeButton">Home</a>
            </div>
            <div className="commentContain">
                <div className="contactComment">Thanks for reviewing my page!</div>
                <div className="contactCommentSpace"></div>
                <div className="contactComment">Let me know what you thought!</div>
                </div>
            <nav className="navContactSpacing">
                <a href="https://github.com/davinTheDeveloper" target="_blank" rel="noreferrer noopener" className="emailLink">
                </a>
                <a href="https://www.linkedin.com/in/davinhenrik/" target="_blank" rel="noreferrer noopener" className="gitLink">
                </a>
                <a href="mailto:davin.henrik@gmail.com" target="_blank" rel="noreferrer noopener" className="linkedinLink">
                </a>
            </nav>
            <div className="backgColor" id="contactFooter">

            </div>
        </div>
    )
}

export default Contact;
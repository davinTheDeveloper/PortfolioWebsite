import React from 'react';
import { Link } from 'react-router-dom';
import "./StartButton.css";


const StartButton = () => {

    return (
            <div>
                <Link to="/Home" className="fade-in-text" id="nestedButton">Start Here</Link>
            </div>
    );
};

export default StartButton;

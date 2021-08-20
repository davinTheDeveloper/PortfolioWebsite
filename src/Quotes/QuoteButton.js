import React from 'react';
import './QuoteButton.css';
import GenerateQuotes from './GenerateQuotes';

const QuoteButton = () => {

    return (
        <div className="QuoteBtnContainer">
             <form className="QuoteContainer">
            <button className="btn" type="submit" onClick={GenerateQuotes}>Generate Quotes</button>
        </form>
        </div>
    );
};

export default QuoteButton;

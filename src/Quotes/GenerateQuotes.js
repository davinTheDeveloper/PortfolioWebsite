import React from 'react';
import './GenerateQuotes.css';
import QuotesList from './QuotesList';

const GenerateQuotes = () => {

        let answer = Math.floor(Math.random() * QuotesList.length);

    

    return (
        <div className="quote">
            <div className="fitQuote">
                {QuotesList[answer]}
            </div>
        </div>
    )
}


export default GenerateQuotes;
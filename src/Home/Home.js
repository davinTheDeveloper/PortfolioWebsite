import React from 'react';
import './Home.css';
import davin from '../davin.jpeg';

function Home() {
        return (
            <div className="homeContainer">
                <h1 className="name">Davin Henrik</h1>
                <div className="davin">
                    <img src={davin} alt="self"/>
                    </div>
            </div>
        );
};

export default Home;

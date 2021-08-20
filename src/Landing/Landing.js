import React from 'react';
import { Route } from 'react-router-dom';
import TypeWriterEffect from 'react-typewriter-effect';
import "./Landing.css";
import StartButton from '../StartButton/StartButton';

const Landing= () => {
    return (

        <div className="container">
            <div className="box1"></div>
            <div className="box2" id="fadeOut">
            <TypeWriterEffect
                startDelay={100}
                cursorColor="black"
                multiText={[
                    "Welcome",
                    "my name is Davin",
                    "have a look around",
                ]}
                typeSpeed={100}
            />
            </div>
                <div className="box3">
                    <Route>
                        <StartButton />
                    </Route>
                </div>
                <div className="box4"></div>
        </div>
    );
};

export default Landing;
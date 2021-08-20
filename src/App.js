import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import Circles from './Circles/Circles';
import QuoteButton from './Quotes/QuoteButton';
import GenerateQuotes from './Quotes/GenerateQuotes';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/Main">
          <Home />
          <Circles />
          <br />
          <QuoteButton />
          <GenerateQuotes />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

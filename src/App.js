import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
=======
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
>>>>>>> 0f38521b23ff7e9d7aabc5a639fda7e92a356c56
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
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/Home">
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
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js'
import About from './components/About.js';
import Dashboard from './components/Dashboard.js';
import Helmet from 'react-helmet';
import Navigation from './components/Navigation.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"



export default class App extends Component {
  render () {
    return (
     <div>
        <Helmet>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
         /> 
        </Helmet>
        <Router>
          <Navigation />

          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>     
      </div>
    );
  }
}


import React, { Component } from 'react';
import './App.css';
import About from './components/About.js';
import Helmet from 'react-helmet';

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
       <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      </Router>
      </div>
   

     
  );
}
}

function Home () {
  return <h2>Home</h2>
}


function Dashboard () {
  return <h2>Dashboard</h2>
}
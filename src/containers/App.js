import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import NavBar from '../components/NavBar';
import LittleJoy from '../components/LittleJoy';
import ColorBox from '../components/ColorBox';
import Home from '../components/Home';

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/little-joy" component={LittleJoy} />
        <Route exact path="/color-box" component={ColorBox} />
      </div>
    </Router>
  );
};

export default App;

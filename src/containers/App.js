import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../components/NavBar';
import LittleJoy from '../components/LittleJoy';
import ColorBox from '../components/ColorBox';
import Home from '../components/Home';

// presentation component
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

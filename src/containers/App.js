import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../components/NavBar';
import LittleJoy from '../components/LittleJoy';
import ColorBox from '../components/ColorBox';
import Home from '../components/Home';
import Madlibs from '../components/MadlibInput';
import Memes from '../components/Memes';

//stateless component
const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar className="navbar"/>
        <Route exact path="/" component={Home} />
        <Route exact path="/color-box" component={ColorBox} />
        <Route exact path="/little-joy" component={LittleJoy} />
        <Route exact path="/madlibs" component={Madlibs} />
        <Route exact path="/memes" component={Memes} />
      </div>
    </Router>
  );
};

export default App;

import React, {Component} from 'react';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import LittleJoy from '../components/LittleJoy';
import ColorBox from '../components/ColorBox';
import Home from '../components/Home';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
  render(){
    return (
      <div>
        <Navbar>
          <Nav>
            <LinkContainer to='/'>
              <NavItem exact>Home</NavItem>
            </LinkContainer>
            <LinkContainer to='/color-box'>
              <NavItem>Color Box</NavItem>
            </LinkContainer>
            <LinkContainer to='/little-joy'>
              <NavItem>Little Joy</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
    );
  }
};

export default NavBar;

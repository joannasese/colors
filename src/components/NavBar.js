import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
  render(){
    return (
      <div>
        <Navbar>
          <Nav>
            <IndexLinkContainer to='/' >
              <NavItem>Home</NavItem>
            </IndexLinkContainer>
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

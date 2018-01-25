import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

//stateless component
const NavBar = () =>
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
        <LinkContainer to='/madlibs'>
          <NavItem>Madlibs</NavItem>
        </LinkContainer>
        <LinkContainer to='/memes'>
          <NavItem>Memes</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  </div>

export default NavBar;

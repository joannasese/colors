import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" style={link}>Home</NavLink>
      <NavLink to="/color-box" style={link} activeStyle={{
        background: 'darkblue'
      }}>Color Box</NavLink>
      <NavLink to="/little-joy" style={link} activeStyle={{
        background: 'darkblue'
      }}>Little Joy</NavLink>
    </div>
  );
};

export default NavBar;

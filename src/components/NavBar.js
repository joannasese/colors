import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/little-joy">Little Joy</NavLink>
    </div>
  );
};

export default NavBar;

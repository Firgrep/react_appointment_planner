import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav>
      <NavLink 
        to="/"
        className={ ({ isActive }) => `a ${isActive ? "active" : ""} `}
      >
        Contacts
      </NavLink>
      <NavLink 
        to="/appointments" 
        className={ ({ isActive }) => `a ${isActive ? "active" : ""} `}
      >
        Appointments
      </NavLink>
   </nav>
  );
};

export default Navigation;

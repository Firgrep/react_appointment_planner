import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav>
      <NavLink to="/" activeClassName="active">
        Contacts
      </NavLink>
      <NavLink to="/appointments" activeClassName="active">
        Appointments
      </NavLink>
   </nav>
  );
};

export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <h1>Freelancer Hub</h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            Projects & Clients
          </NavLink>
        </li>
        <li>
          <NavLink to="/time-tracker">
            Time Tracker
          </NavLink>
        </li>
        <li>
          <NavLink to="/invoices">
            Invoices
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
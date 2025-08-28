import React from 'react';
import { NavLink } from 'react-router-dom'; // 👈 use NavLink instead of Link

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* Make logo clickable */}
        <NavLink to="/" className="navbar__logo-link">
          <img src="/logo512.png" alt="Shield Logo" />
          <span className="navbar__brand">Earth Query</span>
        </NavLink>
      </div>

      <div className="navbar__links">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/demo" className="nav-link">Demo</NavLink>
        <NavLink to="/docs" className="nav-link">Documentation</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

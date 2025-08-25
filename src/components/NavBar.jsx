import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo512.png" alt="Shield Logo" />
        <span className="navbar__brand">Earth Query</span>
      </div>

      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/demo">Demo</Link>
        <Link to="#">Documentation</Link>
        
      </div>

      {/* <div className="navbar__login">
        <Link to="/login" className="login-button">Login</Link>
      </div> */}
    </nav>
  );
};

export default NavBar;

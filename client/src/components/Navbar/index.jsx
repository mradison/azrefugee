import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">🏡 Arizona Refugee Center</Link>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            🏠 Home
          </Link>
          <Link to="/involved" className="navbar-link">
            🤝 Get Involved
          </Link>
          <Link to="/mission" className="navbar-link">
            🎯 Mission
          </Link>
          <Link to="/contact" className="navbar-link">
            📞 Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

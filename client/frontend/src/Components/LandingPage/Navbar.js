import React from 'react';
import '../../CSS/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img style={{ width: '80px' }} src="https://www.msit.in/static/img/msit.png" alt="MSIT Logo" />
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="/login" className="navbar-link">
              Login
            </a>
          </li>
          <li className="navbar-item">
            <a href="/signup" className="navbar-link">
              SignUp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

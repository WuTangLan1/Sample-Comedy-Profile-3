// src/components/Header.tsx

import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1>Citizen Kane</h1>
        <ul className="nav-links">
          <li className="nav-link"><a href="#about">About</a></li>
          <li className="nav-link"><a href="#events">Events</a></li>
          <li className="nav-link"><a href="#contact">Get in Touch</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// src/Header.tsx
import React from 'react';
import './Header.css';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();
  return (
    <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <nav className="nav">
        <div className="brand">
          <img src="/images/profile_photos/profile1.png" alt="Profile" className="profile-image" />
          <h1>Citizen Kane</h1>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#about">
              <span className="nav-text">About</span>
              <span className="nav-icon"><InfoIcon /></span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#events">
              <span className="nav-text">Events</span>
              <span className="nav-icon"><EventIcon /></span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#contact">
              <span className="nav-text">Get in Touch</span>
              <span className="nav-icon"><ContactMailIcon /></span>
            </a>
          </li>
          <li className="nav-link" onClick={toggleDarkMode}>
            <a href="#toggle">
              <span className="nav-text">Toggle</span>
              <span className="nav-icon">{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

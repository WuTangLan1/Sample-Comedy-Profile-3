// src/components/About.tsx
import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import './About.css';

const About: React.FC = () => {
  const { darkMode } = useThemeContext();
  return (
    <section id="about" className={`about-section ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="about-container">
        <img src="/images/profile_photos/profile1.png" alt="Profile" className="about-image" />
        <div className="about-content">
          <h1>About Citizen Kane</h1>
          <p>Citizen Kane is a rising comedy sensation known for sharp wit, engaging storytelling, and unforgettable performances.</p>
          <p>From small local venues to major comedy clubs across the globe, Citizen Kane continues to captivate audiences with hilariously relatable tales.</p>
          <p>His unique blend of humor and insight pushes the boundaries of comedy while forging a deep connection with his audience.</p>
          <p>His journey in comedy is a testament to perseverance, creativity, and the power of laughter to unite people from all walks of life.</p>
        </div>
      </div>
    </section>
  );
};

export default About;

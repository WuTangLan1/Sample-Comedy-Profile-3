// src/components/About.tsx
import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import './About.css';

const About: React.FC = () => {
  const { darkMode } = useThemeContext();
  return (
    <section id="about" className={`about-section ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <img src="/images/profile_photos/profile1.png" alt="Profile" className="about-image" />
      <h1>About Citizen Kane</h1>
      <p>Citizen Kane is a rising comedy sensation known for sharp wit, engaging storytelling, and unforgettable performances.</p>
      <p>From small local venues to major comedy clubs across the globe, Citizen Kane continues to captivate audiences with hilariously relatable tales.</p>
    </section>
  );
};

export default About;

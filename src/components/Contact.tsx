// src/components/Contact.tsx
import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import './Contact.css';

const Contact: React.FC = () => {
  const { darkMode } = useThemeContext();
  return (
    <section className={`contact-section ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2>Contact Citizen Kane</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Write your message..." />
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-profile-images">
        <img src="/images/profile_photos/profile2.png" alt="Profile 2" />
        <img src="/images/profile_photos/profile3.png" alt="Profile 3" />
        <img src="/images/profile_photos/profile4.png" alt="Profile 4" />
        <img src="/images/profile_photos/profile5.png" alt="Profile 5" />
      </div>
    </section>
  );
};

export default Contact;

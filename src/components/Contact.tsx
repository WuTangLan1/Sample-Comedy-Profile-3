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
        <div className="form-row">
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </span>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </span>
            <input type="email" placeholder="Email Address" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.54 1.11 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 001.11 3.54 1 1 0 01-.21 1.11z"/></svg>
            </span>
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.73 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.79a4.27 4.27 0 001.32 5.7 4.26 4.26 0 01-1.94-.54v.06a4.28 4.28 0 003.44 4.19 4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.98A8.6 8.6 0 012 19.54 12.16 12.16 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z"/></svg>
            </span>
            <input type="text" placeholder="Twitter Handle" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M22 12a10 10 0 10-11.63 9.87v-6.99H8v-2.88h2.37V9.84c0-2.33 1.38-3.62 3.5-3.62.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.88h-2.1v6.99A10 10 0 0022 12z"/></svg>
            </span>
            <input type="url" placeholder="Facebook Profile URL" />
          </div>
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.8V24h-4v-8.6c0-2.1-.04-4.8-2.9-4.8-2.9 0-3.3 2.3-3.3 4.6V24h-4V8z"/></svg>
            </span>
            <input type="url" placeholder="LinkedIn Profile URL" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/></svg>
            </span>
            <input type="text" placeholder="Instagram Handle" />
          </div>
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.51 2.3 1.07 2.86.82.09-.64.35-1.07.63-1.32-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0112 7.06a9.54 9.54 0 012.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0112 2z"/></svg>
            </span>
            <input type="url" placeholder="Personal Website" />
          </div>
        </div>
        <div className="form-row full-width">
          <textarea placeholder="Write your message..." />
        </div>
        <div className="form-row full-width">
          <button type="submit">Send Message</button>
        </div>
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

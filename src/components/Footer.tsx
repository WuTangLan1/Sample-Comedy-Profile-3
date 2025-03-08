// src/components/Footer.tsx

import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { darkMode } = useThemeContext();
  return (
    <footer className={`footer ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="footer-container">
        <div className="footer-links">
          <a
            href="https://twitter.com/Citizen_Kane"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
            <span className="footer-text">Citizen_Kane</span>
          </a>
          <a
            href="https://instagram.com/TheCitizenKane"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 0 1 1.757 1.116 4.92 4.92 0 0 1 1.116 1.757c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.116 1.757 4.92 4.92 0 0 1-1.757 1.116c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.757-1.116 4.92 4.92 0 0 1-1.116-1.757c-.163-.46-.349-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.92 4.92 0 0 1 3.752 3.963 4.92 4.92 0 0 1 5.509 2.847c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.131 4.82.322 4.007.634a6.902 6.902 0 0 0-2.515 1.63A6.902 6.902 0 0 0 .634 4.007C.322 4.82.131 5.773.072 7.052.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.279.25 2.232.562 3.045.312.813.746 1.538 1.63 2.515a6.902 6.902 0 0 0 2.515 1.63c.813.312 1.766.503 3.045.562 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.279-.059 2.232-.25 3.045-.562.813-.312 1.538-.746 2.515-1.63a6.902 6.902 0 0 0 1.63-2.515c.312-.813.503-1.766.562-3.045.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.279-.25-2.232-.562-3.045a6.902 6.902 0 0 0-1.63-2.515A6.902 6.902 0 0 0 19.993.634c-.813-.312-1.766-.503-3.045-.562C15.668.013 15.259 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
              <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
            <span className="footer-text">TheCitizenKane</span>
          </a>
          <a
            href="https://facebook.com/CitizenKaneOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24H12v-9.294H9.294V11.76H12V9.412c0-2.676 1.63-4.133 4.005-4.133 1.137 0 2.114.084 2.397.122v2.778l-1.645.001c-1.291 0-1.542.614-1.542 1.515v1.984h3.084l-.402 3.946h-2.682V24h5.254C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
            <span className="footer-text">CitizenKaneOfficial</span>
          </a>
          <a
            href="https://youtube.com/CitizenKaneComedy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184A4.482 4.482 0 0 1 16.66 2.7C14.891 2.5 12 2.5 12 2.5s-2.89 0-4.66.2a4.482 4.482 0 0 0-2.956.485A4.507 4.507 0 0 0 3.02 4.26 28.746 28.746 0 0 0 2.5 12a28.746 28.746 0 0 0 .52 7.74 4.507 4.507 0 0 0 1.366 1.775 4.482 4.482 0 0 0 2.956.485c1.77.2 4.66.2 4.66.2s2.89 0 4.66-.2a4.482 4.482 0 0 0 2.956-.485 4.507 4.507 0 0 0 1.366-1.775A28.746 28.746 0 0 0 21.5 12a28.746 28.746 0 0 0-.885-4.74zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span className="footer-text">CitizenKaneComedy</span>
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} CitizenKane. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


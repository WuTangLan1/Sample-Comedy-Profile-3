// src/components/Footer.tsx
import React from 'react';
import './Footer.css'; // Optional: import your styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

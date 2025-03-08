// src/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Events from './Events';
import './Layout.css';
import { useThemeContext } from '../contexts/ThemeContext';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useThemeContext();
  return (
    <div className={`layout ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <main className="main-content">
        {children}
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

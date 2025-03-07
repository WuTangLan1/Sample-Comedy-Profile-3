// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Events from './Events';

import './Layout.css';

interface LayoutProps {
    children?: React.ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
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

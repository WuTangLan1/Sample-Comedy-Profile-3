// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({ darkMode: true, toggleDarkMode: () => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

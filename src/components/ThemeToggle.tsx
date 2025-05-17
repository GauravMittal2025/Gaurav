import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
          : 'bg-white hover:bg-gray-100 text-gray-800'
      }`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
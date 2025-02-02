import React, { useEffect, useState } from 'react';
import '../styles/darkMode.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get initial state from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update data-theme attribute and localStorage when darkMode changes
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: 'none',
        border: '1px solid var(--text-color)',
        borderRadius: '20px',
        padding: '5px 10px',
        cursor: 'pointer',
        color: 'var(--text-color)',
        marginLeft: '10px'
      }}
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default DarkModeToggle; 
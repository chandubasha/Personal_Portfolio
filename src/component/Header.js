import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    <nav className="navbar">
    <h2 className="logo">MyPortfolio</h2>
    <ul className="nav-links">
      <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
      <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink></li>
      <li><NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink></li>
      <li><NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
    </ul>
  </nav>
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false;


  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
        className="dark-mode-toggle"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
};

export default Header;

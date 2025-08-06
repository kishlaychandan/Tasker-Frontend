import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image.png';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const [theme, setTheme] = useState('light');
  const isDark = theme === 'dark';

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };
  const login=()=>{
    alert("feature in progress...");
  }

  return (
    <nav
      className={`${
        isDark ? 'bg-gray-900 text-white' : 'bg-green-600 text-white'
      } shadow-md w-full transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Living Things"
            className={`h-18 w-auto mr-2 transition duration-300 ${
              isDark ? 'grayscale opacity-80' : ''
            }`}
          />
        </Link>

        {/* Links & Actions */}
        <div className="flex items-center space-x-6">
          <Link to="/" className={`${isDark ? 'hover:text-gray-400' : 'hover:text-green-200'}`}>
            Home
          </Link>
          <Link to="/sms" className={`${isDark ? 'hover:text-gray-400' : 'hover:text-green-200'}`}>
            Messages
          </Link>
          <button className={`${isDark ? 'hover:text-gray-400' : 'hover:text-green-200'}`} onClick={()=>login()}>
            Login
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <FaSun size={20} className="text-yellow-400" />
            ) : (
              <FaMoon size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
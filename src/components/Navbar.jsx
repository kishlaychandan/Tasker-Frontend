import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [theme, setTheme] = useState("light");
    const [menuOpen, setMenuOpen] = useState(false);
    const isDark = theme === "dark";

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark" || stored === "light") {
            setTheme(stored);
            document.documentElement.classList.toggle("dark", stored === "dark");
        } else {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const next = isDark ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    const login = () => {
        alert("feature in progress...");
    };

    return (
        <nav
            className={`${isDark ? "bg-gray-900 text-white" : "bg-green-600 text-white"
                } shadow-md w-full transition-colors duration-300`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center cursor-pointer">
                    <img
                        src={logo}
                        alt="Living Things"
                        className={`h-10 w-auto mr-2 transition duration-300 ${isDark ? "grayscale opacity-80" : ""
                            }`}
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className={`${isDark ? "hover:text-gray-400" : "hover:text-green-200"}`}>
                        Home
                    </Link>
                    <Link to="/sms" className={`${isDark ? "hover:text-gray-400" : "hover:text-green-200"}`}>
                        Messages
                    </Link>
                    <button
                        className={`${isDark ? "hover:text-gray-400" : "hover:text-green-200"}`}
                        onClick={login}
                    >
                        Login
                    </button>
                    <button onClick={toggleTheme} className="p-2 rounded focus:outline-none">
                        {isDark ? (
                            <FaSun size={20} className="text-yellow-400" />
                        ) : (
                            <FaMoon size={20} className="text-white" />
                        )}
                    </button>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 focus:outline-none">
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className={`md:hidden px-4 py-4 space-y-4 transition-all duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-green-600 text-white"
                        }`}
                >
                    <Link
                        to="/"
                        className="block hover:text-green-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/sms"
                        className="block hover:text-green-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        Messages
                    </Link>
                    <button
                        className="block hover:text-green-300"
                        onClick={() => {
                            login();
                            setMenuOpen(false);
                        }}
                    >
                        Login
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="flex items-center space-x-2 hover:text-green-300"
                    >
                        {isDark ? <FaSun /> : <FaMoon />}
                        <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                    </button>
                </div>
            )}

        </nav>
    );
}

export default Navbar;

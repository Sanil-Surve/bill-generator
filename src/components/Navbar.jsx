import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              Bill Craft
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/generate" className="text-white hover:text-gray-200">
              Generate Bill
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950">
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:bg-blue-800"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/generate"
            className="block px-4 py-2 text-white hover:bg-blue-800"
            onClick={toggleMenu}
          >
            Generate Bill
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-white hover:bg-blue-800"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
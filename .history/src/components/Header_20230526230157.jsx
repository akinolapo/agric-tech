import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b-4">
      <div className="container mx-auto flex justify-between items-center py-4 px-5 sm:px-32">
        <div className="flex items-center">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
          <h1 className="ml-2 text-gray-800 font-semibold text-lg">My Website</h1>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            </li>
            <li>
              <button
                type="button"
                className="bg-green-500 text-white rounded-lg py-2 px-4 w-full"
              >
                Food
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
          <button
            type="button"
            className="bg-green-500 text-white rounded-lg py-2 px-4 hidden md:block"
          >
            Food
          </button>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="flex items-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b-4 widt">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
          <h1 className="ml-2 text-gray-800 font-semibold text-lg">My Website</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="flex items-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <button
            type="button"
            className="bg-green-500 text-white rounded-lg py-2 px-4"
          >
            Food
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

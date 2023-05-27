import React, { useEffect, useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  

  return (
    <header className={`bg-white border-b-2 ${isFixed ? 'fixed top-0 z-10 w-full' : ''}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-5 sm:px-32">
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL+`media/logo.png`}
            alt="Logo"
            className="h-8 w-auto"
          />
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
            onClick={toggleMenu}
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
      <div>
          {isMenuOpen && (
            <div className="mt-2 w-full">
              <ul className="bg-white border rounded-md divide-y divide-gray-200 shadow-md">
                <li className="py-2 px-4">
                  <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                </li>
                <li className="py-2 px-4">
                  <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                </li>
                <li className="py-2 px-4">
                  <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
                </li>
                <li className="py-2 px-4">
                  <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
                </li>
                <li className="py-2 px-4">
                  <button
                    type="button"
                    className="bg-green-500 text-white rounded-lg py-2 px-4 w-full"
                  >
                    Food
                  </button>
                </li>
              </ul>
              <div className="absolute top-0 right-0 p-2">
              </div>
            </div>
          )}
          </div>
    </header>
  );
};

export default Header;

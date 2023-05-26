import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img className="h-8 w-8" src="logo.png" alt="Logo" />
        <nav className="ml-4">
          <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2">Services</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2">Contact</a>
        </nav>
      </div>
      <div className="hidden md:block">
        <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-full">
          Order Food
        </button>
      </div>
      <div className="md:hidden">
        <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;

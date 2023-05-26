import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-white font-bold text-xl">Your Logo</div>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Products</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

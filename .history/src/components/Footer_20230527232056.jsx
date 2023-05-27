import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>123 Main Street, City</p>
            <p>State, Country</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Company</h3>
            <ul className="list-none">
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Connect with Us</h3>
            <ul className="list-none">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-gray-300 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

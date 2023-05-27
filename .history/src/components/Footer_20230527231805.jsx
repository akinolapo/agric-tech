import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-4">Address</h4>
            <p>123 Street, City</p>
            <p>State, Country</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <p>About Us</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-gray-300 py-4">
        <div className="container mx-auto text-center text-gray-500">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

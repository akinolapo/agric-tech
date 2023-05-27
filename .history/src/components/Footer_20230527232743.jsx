import React from 'react';
import {}

const Footer = () => {
  return (
    <footer className="bg-black text-white px-5 sm:px-32">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p>123 Street Name</p>
            <p>City, State</p>
            <p>Country</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <p>About Us</p>
            <p>Services</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p><AiOutlineInstagram/>Instagram</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 py-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

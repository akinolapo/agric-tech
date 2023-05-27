import React from 'react';
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'

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
            <p className='flex items-center text'><AiOutlineMail className='green-icon'/><span>hell0@molebi.com</span></p>
            <p className='flex items-center'><AiOutlinePhone className='green-icon'/><span>+2340000000000</span></p>
            <p className='flex items-center'><AiOutlineInstagram className='green-icon'/><span>Instagram</span></p>
            <p className='flex items-center'><AiOutlineFacebook className='green-icon'/><span>Facebook</span></p>
            <p className='flex items-center'><AiOutlineTwitter className='green-icon'/><span>Twitter</span></p>
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

import React from 'react';
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-5 sm:px-32">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p className='text-lg'>123 Street Name</p>
            <p className='text-lg'>City, State</p>
            <p className='text-lg'>Country</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <Link to='/about' className="text-lg">About</Link>
            <Link to='/impact' className="text-lg">About</Link>
            <Link to='/a' className="text-lg">About</Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <p className='flex items-center text-lg'><AiOutlineMail className='green-icon'/><span>hello@molebi.com</span></p>
            <p className='flex items-center text-lg'><AiOutlineInstagram className='green-icon'/><span>Instagram</span></p>
            <p className='flex items-center text-lg'><AiOutlineFacebook className='green-icon'/><span>Facebook</span></p>
            <p className='flex items-center text-lg'><AiOutlineTwitter className='green-icon'/><span>Twitter</span></p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 py-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Molebi AgroTech Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

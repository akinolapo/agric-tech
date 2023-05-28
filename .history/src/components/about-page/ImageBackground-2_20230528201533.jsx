import React from 'react';
import bgImage from './background.jpg';

const ImageBackground-2 = () => {
  return (
    <div className="relative bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="relative px-5 sm:px-32 py-8 md:py-16 lg:py-24">
        <div className="container mx-auto">
        <h1 className='text-black text-3xl font-bold mb-10'>About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-500 bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Who We Are</h3>
              <p className='text-lg'>Molebi AgroTech Hub is a leading provider of innovative solutions for agribusinesses.</p>
            </div>

            <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Our Vision</h3>
              <p className='text-lg'>To inspire the production and distribution of sustainable food for Africa.</p>
            </div>

            <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Our Mission</h3>
              <p className='text-lg'>Our mission is to empower farmers and agricultural companies with cutting-edge technology for enhanced productivity and growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackground-2;

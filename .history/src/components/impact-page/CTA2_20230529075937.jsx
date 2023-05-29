import React from 'react';
import { Link } from 'react-router-dom';

const CTA2 = () => {
  return (
    <div className="text-black bg-white text-center py-8 px-5 sm:px-32 sm:py-16">
      <h3 className="text-3xl font-bold mb-4">Join Molebi AgroTech Hub</h3>
      <p className="text-lg sm:text-xl mb-8">
      Together, we can empower agribusinesses with cutting-edge technology, create sustainable farming practices, and inspire the next generation of agricultural leaders.
      </p>
      <Link>
      <button className="bg-white text-black py-3 px-8 rounded-full shadow-lg font-semibold text-lg sm:text-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
        Contact Now
      </button>
    </div>
  );
};

export default CTA2;

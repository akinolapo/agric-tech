import React from 'react';

const CTA = () => {
  return (
    <div className="text-black bg-white text-center py-8 px-5 sm:px-32 sm:py-16">
      <h3 className="text-3xl font-bold mb-4">Contact Us Today</h3>
      <p className="text-lg sm:text-xl mb-8">
      At Molebi AgroTech Hub, we are committed to delivering innovative solutions that empower agribusinesses, enhance productivity, and drive growth. Contact us today to learn more about how we can help you leverage cutting-edge technology for your agribusiness needs.
      </p>
      <Link></Link><button className="bg-white text-black py-3 px-8 rounded-full shadow-lg font-semibold text-lg sm:text-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
        Contact Now
      </button>
    </div>
  );
};

export default CTA;

import React from 'react';

const CTA = () => {
  return (
    <div className="bg-grey-900 text-white text-center py-8 px-4 sm:py-16 sm:px-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us Today</h1>
      <p className="text-lg sm:text-xl mb-8">
        Our team is ready to assist you. Reach out to us for any inquiries or support you may need.
      </p>
      <button className="bg-white text-black py-3 px-8 rounded-full shadow-lg font-semibold text-lg sm:text-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
        Contact Now
      </button>
    </div>
  );
};

export default CTA;

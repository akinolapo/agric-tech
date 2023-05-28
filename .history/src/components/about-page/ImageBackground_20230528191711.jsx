import React from 'react';
import bgImage from '..';

const ImageBackground = () => {
  return (
    <div className="relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="relative z-10 p-8 md:p-16 lg:p-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Column 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Column 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Column 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackground;

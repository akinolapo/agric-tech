import React from 'react';

const ImageBackground = () => {
  return (
    <div className="relative">
      <img
        src="/path/to/your/image.jpg"
        alt="Background Image"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="max-w-lg mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="mb-8 sm:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Column 1</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus urna sed turpis rutrum, eu eleifend odio scelerisque.
              </p>
            </div>
            <div className="mb-8 sm:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Column 2</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus urna sed turpis rutrum, eu eleifend odio scelerisque.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Column 3</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus urna sed turpis rutrum, eu eleifend odio scelerisque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackground;

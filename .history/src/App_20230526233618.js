import React, { useState, useEffect } from 'react';

const TwoColumnComponent = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textArray = ['Text Box 1', 'Text Box 2', 'Text Box 3', 'Text Box 4'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container mx-auto py-4 px-5 sm:px-32">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Header</h1>
          <p className="text-lg">Left column text content goes here.</p>
        </div>
        <div className="md:w-1/2">
          <div className="relative h-64">
            <img
              src="/path/to/image.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              {textArray.map((text, index) => (
                <div
                  key={index}
                  className={`absolute text-white text-2xl font-bold transition-opacity ${
                    index === currentTextIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;

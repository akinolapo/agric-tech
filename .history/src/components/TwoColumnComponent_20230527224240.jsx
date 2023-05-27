import React from 'react';

const TwoColumnComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <video className="w-full h-auto object-cover rounded-md" autoPlay loop muted>
            <source src="/path/to/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Agricultural Technology & Consultancy</h2>
          <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida justo non ex rutrum, at faucibus erat lobortis. Fusce eu fermentum massa, eu facilisis ex. Nam mattis eleifend consectetur. Morbi lacinia arcu lacus, at facilisis nisl lacinia eget.</p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;

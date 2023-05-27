import React from 'react';

const TwoColumnComponent = () => {
  return (
    <div className="container mx-auto px-5 sm:px-32">
      <div className="grid items-center grid-cols-1 gap-20 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <video className="w-full h-auto object-cover rounded-md" autoPlay loop muted>
            <source src={process.env.PUBLIC_URL+`media/tech.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-green-500 mb-4">Agricultural Technology & Consultancy</h2>
          <p className="text-lg">we believe in harnessing the power of innovation and technology to revolutionize the agricultural industry. Our mission is to empower farmers with cutting-edge solutions and expert consultation, enabling them to maximize productivity, sustainability, and profitability.</p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;

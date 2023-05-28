import React from 'react';
import Header from '../Header';

const AboutPage = () => {
  return (
    <>
    
    </>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="/images/about-image.jpg"
              alt="About Us"
              className="rounded-lg mb-4 md:mb-0 md:mr-4"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-4">
              Molebi AgroTech Hub is a leading provider of innovative solutions for agribusinesses. Our mission is to empower farmers and agricultural companies with cutting-edge technology for enhanced productivity and growth.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              With a team of dedicated experts and a passion for sustainable agriculture, we offer a range of products and services that revolutionize the industry. From smart farming solutions to precision agriculture tools, we provide the tools and knowledge to optimize operations and maximize yields.
            </p>
            <p className="text-lg leading-relaxed">
              Join us in shaping the future of agribusiness with technology-driven solutions that drive efficiency, sustainability, and profitability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

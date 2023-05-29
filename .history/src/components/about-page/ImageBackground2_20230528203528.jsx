import React from 'react';
import bgImage from './background-1.jpg';

const ImageBackground2 = () => {
  return (
    <div className="relative bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="relative px-5 sm:px-32 py-8 md:py-16 lg:py-24">
        <div className="container mx-auto">
        <h1 className='text-white text-3xl font-bold mb-10'>Our Procedure</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-500 bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Consultation and Assessment</h3>
              <p className='text-lg'>At Molebi AgroTech Hub, we begin by conducting a comprehensive consultation and assessment to understand the unique needs and challenges of your agribusiness. </p>
            </div>

            <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Solution Design and Implementation</h3>
              <p className='text-lg'>Based on the insights gathered during the consultation and assessment phase, our skilled professionals at Molebi AgroTech Hub develop customized solutions designed to address your agribusiness needs.</p>
            </div>

            <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Training and Support</h3>
              <p className='text-lg'>Our mission is to empower farmers and agricultural companies with cutting-edge technology for enhanced productivity and growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackground2;

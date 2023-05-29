import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ImageBackground from './ImageBackground';
import Value from '../Value';
import ImageBackground2 from './ImageBackground2';

const AboutPage = () => {
  return (
    <>
    <Header/>
    <ImageBackground/>
    <div className="bg-gray-100 ">
      <div className="container mx-auto py-8 px-5 sm:px-32">
        <div className="grid items-center grid-cols-1 gap-20 md:grid-cols-2">
          <div className="relative overflow-hidden">
            <img
              src={process.env.PUBLIC_URL+`media/about.jpg`}
              alt="About Us"
              className="rounded-lg mb-4 md:mb-0 md:mr-4"
            />
          </div>
          <div className="flex flex-col justify-center bg-green-500 p-10 rounded-xl">
            <h3 className='text-2xl mb-4'>What We Do</h3>
            <p className="text-lg leading-relaxed mb-4">
            At Molebi AgroTech Hub, we understand the challenges faced by the agricultural sector and the need for efficient, modern solutions. Our team of experts combines their deep industry knowledge with advanced technological expertise to develop customized solutions tailored to the unique requirements of each agribusiness.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-5 sm:px-32">
        <div className="grid items-center grid-cols-1 gap-20 md:grid-cols-2">
        <div className="flex flex-col justify-center">
            <h3 className='text-2xl mb-4 text-green-500'>Our Journey</h3>
            <p className="text-lg leading-relaxed mb-4">
            Founded with a passion for transforming the agribusiness landscape, Molebi AgroTech Hub embarked on its journey to bridge the gap between traditional farming practices and the advancements of the digital era. Our team of visionary experts recognized the immense potential of technology in unlocking new possibilities for farmers and agribusinesses.
            </p>
            <p></p>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={process.env.PUBLIC_URL+`media/about-1.jpg`}
              alt="About Us"
              className="rounded-lg mb-4 md:mb-0 md:mr-4"
            />
          </div>
        </div>
      </div>

    </div>
    <ImageBackground2/>
    <Value/>
    <Footer/>
    </>
  );
};

export default AboutPage;

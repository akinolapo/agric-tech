import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ImageBackground from './ImageBackground';
import Value from '../Value';

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
          <div className="flex flex-col justify-center bg-green-500 p-10">
            <h3 className='text-2xl mb-4'>What We Do</h3>
            <p className="text-lg leading-relaxed mb-4">
            At Molebi AgroTech Hub, we understand the challenges faced by the agricultural sector and the need for efficient, modern solutions. Our team of experts combines their deep industry knowledge with advanced technological expertise to develop customized solutions tailored to the unique requirements of each agribusiness.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Value/>
    <Footer/>
    </>
  );
};

export default AboutPage;

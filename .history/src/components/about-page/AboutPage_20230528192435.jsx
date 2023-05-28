import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AboutPage = () => {
  return (
    <>
    <Header/>
    <ImageBackgroun/>
    <div className="bg-gray-100 ">
      <div className="container mx-auto py-8 px-5 sm:px-32">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <div className="grid items-center grid-cols-1 gap-20 md:grid-cols-2">
          <div className="relative overflow-hidden">
            <img
              src={process.env.PUBLIC_URL+`media/about.jpg`}
              alt="About Us"
              className="rounded-lg mb-4 md:mb-0 md:mr-4"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed mb-4">
              Molebi AgroTech Hub is a leading provider of innovative solutions for agribusinesses. Our mission is to empower farmers and agricultural companies with cutting-edge technology for enhanced productivity and growth.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              With a team of dedicated experts and a passion for sustainable agriculture, we offer a range of products and services that revolutionize the industry. From smart farming solutions to precision agriculture tools, we provide the tools and knowledge to optimize operations and maximize yields.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;

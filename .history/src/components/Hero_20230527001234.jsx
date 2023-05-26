import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white text-black py-20 px-5 sm:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-green-500">Agriculture Business Made Easy</h1>
          <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="bg-white text-green-500 py-2 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300">Learn More</button>
        </div>
        <div className="lg:w-1/2">
          <img src={process.env.PUBLIC_URL+`media/hero.jpg`}alt="Agriculture" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

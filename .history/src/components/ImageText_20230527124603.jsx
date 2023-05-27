import React from 'react';

const ImageText = () => {
  return (
    <section className="bg-white text-black py-20 px-5 sm:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-40">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-green-500">Molebi AgroTech Hub <br></br>Innovative Solutions for Agribusiness</h1>
          <p className="text-lg mb-8">Molebi AgroTech Hub offers innovative solutions, empowering agribusinesses with cutting-edge technology for enhanced productivity and growth.</p>
          <button className="bg-white text-lg border-2 border-green-200 text-green-500 py-2 px-6 rounded-full font-semibold shadow-xl hover:shadow-2xl transition duration-300">Learn More</button>
        </div>
        <div className="lg:w-1/2">
          <img src={process.env.PUBLIC_URL+`media/hero.jpg`}alt="Agriculture" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default ImageText;

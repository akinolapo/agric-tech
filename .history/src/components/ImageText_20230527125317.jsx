import React from 'react';

const ImageText = () => {
  return (
    <section className="text-black px-5 sm:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-xl font-bold mb-4 text-green-500">Efficient Processing Techniques</h2>
          <p className="text-lg mb-8">Molebi AgroTech Hub offers innovative solutions, empowering agribusinesses with cutting-edge technology for enhanced productivity and growth.</p>
        </div>
        <div className="lg:w-1/2">
          <img src={process.env.PUBLIC_URL+`media/hero.jpg`}alt="Agriculture" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default ImageText;

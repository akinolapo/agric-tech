import React from 'react';

const ImageText = () => {
  return (
    <section className="text-black px-5 sm:px-32 pb-10">
      <div className="container items-center mx-auto flex flex-col lg:flex-row gap-10 sm:gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-xl font-bold mb-4 text-green-500">Efficient Processing Techniques</h2>
          <p className="text-lg mb-8">Efficient processing is crucial for transforming raw agricultural materials into high-quality products. At Molebi AgroTech Hub, we leverage the latest processing technologies and methodologies to maximize yields and minimize waste. Our team of experts is well-versed in various processing techniques, ensuring that your products are handled with utmost care and precision.</p>
        </div>
        <div className="lg:w-1/2">
          <img src={process.env.PUBLIC_URL+`media/hero.jpg`}alt="Agriculture" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default ImageText;

import React from 'react';

const TwoColumnMasonry = () => {
  return (
    <div className="bg-gray-200">
    <div className="container mx-auto py-20 px-5 sm:px-32">
      <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        <div className="space-y-4 grid grid-cols-2 gap-4 md:space-y-0">
          <div>
            <img src={process.env.PUBLIC_URL+`media/yam.jpg`} alt="Thumbnail 1" className="w-full rounded-2xl" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL+`media/maize-2.jpg`} alt="Thumbnail 2" className="w-full rounded-2xl" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL+`media/cocoa.jpg`} alt="Thumbnail 3" className="w-full rounded-2xl" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL+`media/rice.jpg`} alt="Thumbnail 4" className="w-full rounded-2xl" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-green-500 mb-4">Innovative Solutions for Agribusiness</h2>
          <p>Molebi AgroTech Hub is a leading provider of innovative solutions, empowering agribusinesses with cutting-edge technology for enhanced productivity and growth. We understand the challenges faced by the agricultural industry and strive to bridge the gap between traditional practices and modern advancements. Our goal is to revolutionize the way agribusinesses operate, ensuring sustainable and profitable growth in this dynamic sector.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TwoColumnMasonry;

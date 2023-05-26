import React from 'react';

const ImageTextComponent = () => {
  return (
    <div className="bg-green-500 text-black">
      <div className="container mx-auto flex flex-col-reverse items-center justify-center py-4 px-5 sm:px-32 md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/path/to/image.png"
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Title</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar massa vel orci efficitur, et volutpat erat tincidunt. Mauris elementum lacus nec ex consequat, vitae viverra sem commodo.</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;

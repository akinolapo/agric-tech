import React from 'react';

const TwoColumnMasonry = () => {
  return (
    <div className="bg-gray-200">
    <div className="container mx-auto py-20 px-5 sm:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="space-y-4 grid gri md:space-y-0">
          <div>
            <img src={process.env.PUBLIC_URL+`media/rice.jpg`} alt="Thumbnail 1" className="w-full rounded-2xl" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL+`media/cocoa.jpg`} alt="Thumbnail 2" className="w-full rounded-2xl" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL+`media/cocoa.jpg`} alt="Thumbnail 3" className="w-full rounded-2xl" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL+`media/maize.jpg`} alt="Thumbnail 4" className="w-full rounded-2xl" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Text Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod tellus et ligula vulputate, eu efficitur metus interdum. Sed efficitur nunc ut sem malesuada, sit amet varius risus dapibus. Ut tristique sem et est vulputate, at dignissim mauris sollicitudin. In nec ante sollicitudin, consectetur enim vel, vehicula justo.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TwoColumnMasonry;

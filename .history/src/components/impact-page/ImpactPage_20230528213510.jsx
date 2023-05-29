import React from 'react';
import CTA from '../CTA';
import Footer from '../Footer';
import Header from '../Header';

const ImpactPage = () => {
  const impactData = [
    {
      title: 'Community Event',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: 'image1.jpg',
    },
    {
      title: 'Volunteer Program',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: 'image2.jpg',
    },
    {
      title: 'Education Initiative',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: 'image3.jpg',
    },
    {
      title: 'Environmental Campaign',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: 'image4.jpg',
    },
    {
      title: 'Healthcare Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: 'image5.jpg',
    },
  ];

  return (
    <>
    <Header/>
    <div className="container bg-g mx-auto px-5 sm:px-32 py-8">
      <div className='items-center text-center'>
      <h1 className="text-3xl font-bold mb-4 text-center item">Community Impact</h1>
      <hr className='underline-title mb-2 w-32 mx-auto'></hr>
      <hr className='underline-title mt-2 w-20 mx-auto'></hr>
      <p className="text-gray-600 mt-8 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at augue id augue consequat luctus. Aenean
        eleifend nisl eu felis placerat, vitae malesuada arcu feugiat. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas.
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {impactData.map((impact, index) => (
          <div key={index} className="flex">
            <img src={impact.imageSrc} alt={impact.title} className="w-40 h-40 object-cover rounded-md mr-4" />
            <div>
              <h2 className="text-xl font-semibold mb-2">{impact.title}</h2>
              <p className="text-gray-600">{impact.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <CTA/>
    <Footer/>
    </>
  );
};

export default ImpactPage;

import React from 'react';
import CTA2 from './CTA2';
import Footer from '../Footer';
import Header from '../Header';

const ImpactPage = () => {
  const impactData = [
    {
      title: 'AgriTech Training Workshops',
      description: 'Molebi AgroTech Hub organizes regular workshops to educate farmers and agricultural enthusiasts on the latest advancements in agricultural technology. These workshops cover topics such as precision farming, IoT applications, and data-driven decision-making. Participants gain practical knowledge and skills to optimize their farming practices and increase yields.',
      imageSrc: process.env.PUBLIC_URL+`media/impact-1.jpg`,
    },
    {
      title: 'Software Implementation for Farmers',
      description: 'We believe that technology can significantly improve farming efficiency. Molebi AgroTech Hub offers software implementation services to farmers, helping them integrate innovative solutions into their operations. Our team assists in setting up farm management software, remote sensing tools, and automated irrigation systems. This empowers farmers to make data-driven decisions and maximize their productivity.',
      imageSrc: 'image2.jpg',
    },
    {
      title: 'Youth Agribusiness Incubator',
      description: 'To nurture the next generation of agribusiness leaders, Molebi AgroTech Hub runs a youth incubator program. Secondary students interested in agriculture and entrepreneurship receive mentorship, training, and resources to develop their own agribusiness ventures. Through hands-on experience and guidance from industry experts, we inspire young minds to become innovative leaders in the agricultural sector.',
      imageSrc: 'image3.jpg',
    },
    {
      title: 'Community Farming Initiatives',
      description: 'We believe in the power of community collaboration. Molebi AgroTech Hub facilitates community farming initiatives where local residents come together to cultivate and maintain shared agricultural spaces. These initiatives promote sustainable farming practices, provide fresh produce for the community, and foster a sense of unity and cooperation among participants.',
      imageSrc: 'image4.jpg',
    },
    {
      title: 'Agripreneur Networking Events',
      description: 'Networking is crucial for the growth of agribusinesses. Molebi AgroTech Hub organizes networking events that bring together farmers, technology providers, investors, and industry professionals. These events provide a platform for knowledge exchange, partnerships, and collaborations that drive innovation in the agricultural sector.',
      imageSrc: 'image5.jpg',
    },
    {
      title: 'Agribusiness Hackathons',
      description: 'To encourage creative problem-solving in agriculture, Molebi AgroTech Hub hosts agribusiness hackathons. These intense, collaborative events gather teams of diverse individuals to develop innovative solutions for pressing agricultural challenges. Participants have the opportunity to pitch their ideas to a panel of judges and win prizes, while also contributing to the advancement of the agribusiness industry.',
      imageSrc: 'image5.jpg',
    }
  ];

  return (
    <>
    <Header/>
    <div className=" bg-gray-100 mx-auto px-5 sm:px-32 py-8">
      <div className='items-center mx-auto'>
      <h1 className="text-3xl font-bold mb-4 text-center item">Community Impact</h1>
      <hr className='underline-title mb-2 w-32 mx-auto'></hr>
      <hr className='underline-title mt-2 w-20 mx-auto'></hr>
      <p className="text-gray-600 mt-8 mb-8 text-center">
      Molebi AgroTech Hub is dedicated to creating a positive impact on the community through various activities that promote sustainable agriculture and empower the next generation of agribusiness leaders. Our commitment to innovative solutions ensures that we provide cutting-edge technology for enhanced productivity and growth.
      </p>
      </div>
      <div className="grid grid-cols-1 gap-8 px-5 sm:px-32">
        {impactData.map((impact, index) => (
          <div key={index} className="block sm:flex sm:gap items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">{impact.title}</h2>
              <p className="text-gray-600">{impact.description}</p>
            </div>
            <img src={impact.imageSrc} alt={impact.title} className="w-full h-auto object-cover rounded-md mr-4" />
          </div>
        ))}
      </div>
    </div>
    <CTA2/>
    <Footer/>
    </>
  );
};

export default ImpactPage;

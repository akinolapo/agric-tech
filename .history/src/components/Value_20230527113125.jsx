import React from 'react'
import {FaRegHandshake} from 'react-icons/fa'
import {AiOutlineDatabase} from 'react-icons/ai'
import {MdOutlineCurrencyExchange, MdOutlineAgriculture} from 'react-icons/md'
import {GiFoodTruck} from 'react-icons/gi'

const data= [
    {
        id: 1,
        icon: <FaRegHandshake className='card-icon'/>,
        title: 'Collaborative Partnerships',
        description: 'We believe in the power of collaboration. We forge strong partnerships with agribusinesses, farmers, industry stakeholders, and technology providers to create a network that fosters knowledge sharing, innovation, and mutual growth.',
        // link: '/'
    },
    {
        id: 2,
        icon: <AiOutlineDatabase className='card-icon'/>,
        title: 'Storage and Warehousing',
        description: 'Molebi AgroTech Hub provides advanced storage and warehousing facilities to ensure the proper handling and preservation of agricultural commodities. We offer storage solutions with inventory management systems, and quality control measures, reducing post-harvest losses.',
        // link: '/'
    },
    {
        id: 3,
        icon: <MdOutlineCurrencyExchange className='card-icon'/>,
        title: 'Commodity Trading',
        description: 'Molebi AgroTech Hub provides a comprehensive value chain solution that includes commodity trading and marketing services. We help agribusinesses connect with buyers and sellers, ensuring efficient and profitable transactions.',
        // link: '/'
    },
    {
        id: 4,
        icon: <MdOutlineAgriculture className='card-icon'/>,
        title: 'Cutting-edge Technology',
        description: 'We provide innovative and advanced technological solutions that empower agribusinesses to stay ahead in the industry. Our tools and systems are designed to optimize productivity and maximize growth.',
        // link: '/'
    },
    {
        id: 5,
        icon: <GiFoodTruck className='card-icon'/>,
        title: 'Transportation and Logistics',
        description: 'Molebi AgroTech Hub facilitates efficient transportation and logistics services, ensuring timely delivery of agricultural products to markets, reducing wastage, and enhancing profitability for agribusinesses.',
        // link: '/'
    },
    {
        id: 6,
        icon: <GiGiftOfKnowledge className='card-icon'/>,
        title: 'Knowledge Sharing and Training',
        description: 'Exportation of in-demand agro commodities with high level of nutritional and quality standards.',
        // link: '/'
    }

]

const Value = () => {
  return (
    < div className='py-10 px-5 sm:px-32'>
    <div className='text-center'>
        <h2 className='text-2xl text-green-500 font-bold mb-4'>Our Value Chain</h2>
        <p>Our approach is inspired by our determination to improve the agricultural landscape in Africa.</p>
    </div>
    <div className='mt-10 block md:grid md:gap-20 md: grid-cols-2 lg:grid-cols-3'>
        {
            data.map(({id, icon, title, description})=>{
                return(
                    <div key={id} className='border-solid border-2 border-green-500 p-6 rounded-2xl mb-4 md:mb-0'>
            {icon}
            <h3 className='text-xl '>{title}</h3>
            <hr className='underline-title w-10 my-2'></hr>
            <p>{description}</p>
        </div>
                )
            })
        }
        
    </div>
    </div>
  )
}

export default Value
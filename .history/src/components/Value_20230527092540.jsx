import React from 'react'
import {FaRegHandshake from 'react-icons/fa'
import AiOutlineDatabase from 'react-icons/ai'
import MdOutlineCurrencyExchange from 'react-icons/md'

const data= [
    {
        id: 1,
        icon: <FaRegHandshake className='card-icon'/>,
        title: 'Contracts',
        description: 'We secure access to premium markets by sourcing profitable contracts from both local and international buyers, before the harvest period.',
        // link: '/'
    },
    {
        id: 2,
        icon: <AiOutlineDatabase className='card-icon'/>,
        title: 'Aggregation',
        description: 'Ensuring accessibility of conducive storage systems for smallholder farmers after harvest.',
        // link: '/'
    },
    {
        id: 3,
        icon: <MdOutlineCurrencyExchange className='card-icon'/>,
        title: 'Commodity Trading',
        description: 'Exportation of in-demand agro commodities with high level of nutritional and quality standards.',
        // link: '/'
    }
]

const Value = () => {
  return (
    <div className='mt-10 block md:grid md:gap-4 md: grid-cols-2 lg:grid-cols-3'>
        {
            data.map(({id, icon, title, description})=>{
                return(
                    <div key={id} className='border-solid border-2 border-gray-500 p-6 rounded-2xl mb-4 md:mb-0'>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
                )
            })
        }
        
    </div>
  )
}

export default Value
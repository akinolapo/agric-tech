import React from 'react'
import FaRegHandshake from 

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
        icon: <GiToken className='card-icon'/>,
        title: 'NFT Mint',
        description: 'Turn your digital content into NFT by uploading them here',
        // link: '/'
    },
    {
        id: 3,
        icon: <IoIosApps className='card-icon'/>,
        title: 'Connect to Dapps',
        description: 'Connect decentralised web applications to mobile wallets. Enable DAPP on mobile wallet/ Extension.',
        // link: '/'
    },
    {
        id: 4,
        icon: <AiOutlineLogin className='card-icon'/>,
        title: 'Login Issues',
        description: 'Do you have issues logging into your wallet?',
        // link: '/'
    },
    {
        id: 5,
        icon: <RiRefund2Fill className='card-icon'/>,
        title: 'Missing Funds',
        description: 'Lost access to funds or funds is missing?',
        // link: '/'
    },
    {
        id: 6,
        icon: <AiOutlineFundView className='card-icon'/>,
        title: 'High Fees',
        description: 'Increase in transaction fees?',
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
            <Link to='/walletconnect' className='btn btn-primary mt-3'>Click Here</Link>
        </div>
                )
            })
        }
        
    </div>
  )
}

export default Value
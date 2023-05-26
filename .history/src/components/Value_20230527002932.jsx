import React from 'react'
import {BsCurrencyExchange, BsCashCoin} from 'react-icons/bs'
import {GiToken} from 'react-icons/gi'
import {IoIosApps} from 'react-icons/io'
import {AiOutlineLogin, AiOutlineFundView, AiOutlineFieldTime, AiOutlineWallet, AiFillLock} from 'react-icons/ai'
import {RiRefund2Fill} from 'react-icons/ri'
import {CgMoveRight} from 'react-icons/cg'
import {FiMoreHorizontal} from 'react-icons/fi'
import {Link} from 'react-router-dom'

const data= [
    {
        id: 1,
        icon: <BsCurrencyExchange className='card-icon'/>,
        title: 'Swap/Exchange',
        description: 'We will support you in any related issues with swaping and/or exchange of coins.',
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
    },
    {
        id: 7,
        icon: <CgMoveRight className='card-icon'/>,
        title: 'Migrate',
        description: 'Do you have issues with migrations?',
        // link: '/'
    },
    {
        id: 8,
        icon: <AiOutlineFieldTime className='card-icon'/>,
        title: 'Transaction Delay',
        description: 'Do you have issues with transactions being delayed?',
        // link: '/'
    },
    {
        id: 9,
        icon: <AiOutlineWallet className='card-icon'/>,
        title: 'Issues With Trading Wallet',
        description: 'Do you have probems with your trading account?',
        // link: '/'
    },
    {
        id: 10,
        icon: <BsCashCoin className='card-icon'/>,
        title: 'Unable to purchase coins',
        description: 'if your account is not recognized as a trusted payment source you may not be able to buy crypto and add coins',
        // link: '/'
    },
    {
        id: 11,
        icon: <AiFillLock className='card-icon'/>,
        title: 'Locked Account',
        description: 'if you are logged out due to activity on the account',
        // link: '/'
    },
    {
        id: 12,
        icon: <FiMoreHorizontal className='card-icon'/>,
        title: 'Others',
        description: 'Other issues not listed',
        // link: '/'
    }
]

const Cards = () => {
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

export default Cards
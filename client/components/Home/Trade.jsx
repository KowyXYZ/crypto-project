import Image from 'next/image'
import React from 'react'

const Trade = () => {
  return (
    <div className='w-full bg-[#fff] py-12'>
        <div className='container mx-auto flex flex-col sm:flex-row justify-center items-center gap-10'>
            <div className='border-2 p-8 w-[350px] h-[350px] border-gray-400 rounded-3xl flex justify-center gap-3 items-center text-center flex-col'>
                <Image src='/assets/btc.png' height={50} width={50} className='object-contain '/>
                <p className='text-[32px] font-bold text-black'>Bitcoin <span className='text-gray-400 text-[20px]'>BTC</span></p>
                <p className='text-gray-600 text-[20px] w-[300px]'>Digital currency in which a record of transactions is maintained.</p>
                <button> <button className='bg-[#3671E9] rounded-full flex p-4 text-[20px] gap-2 justify-center items-center'>Start Now <Image src='/assets/arrow.png' width={30} height={30}/></button></button>
            </div>

            <div className='border-2 p-8 w-[350px] h-[350px] border-gray-400 rounded-3xl flex justify-center gap-3 items-center text-center flex-col'>
                <Image src='/assets/eth.png' height={50} width={50} className='object-contain '/>
                <p className='text-[32px] font-bold text-black'>Ethereum <span className='text-gray-400 text-[20px]'>ETH</span></p>
                <p className='text-gray-600 text-[20px] w-[300px]'>Blockchain technology to create and run decentralized digital applications.</p>
                <button> <button className='bg-[#3671E9] rounded-full flex p-4 text-[20px] gap-2 justify-center items-center'>Start Now <Image src='/assets/arrow.png' width={30} height={30}/></button></button>
            </div>

            <div className='border-2 p-8 w-[350px] h-[350px] border-gray-400 rounded-3xl flex justify-center gap-3 items-center text-center flex-col'>
                <Image src='/assets/lite.png' height={50} width={50} className='object-contain '/>
                <p className='text-[32px] font-bold text-black'>Litecoin <span className='text-gray-400 text-[20px]'>LTC</span></p>
                <p className='text-gray-600 text-[20px] w-[300px]'>Cryptocurrency that enables instant payments to anyone in the world.</p>
                <button> <button className='bg-[#3671E9] rounded-full flex p-4 text-[20px] gap-2 justify-center items-center'>Start Now <Image src='/assets/arrow.png' width={30} height={30}/></button></button>
            </div>
        </div>
    </div>
  )
}

export default Trade
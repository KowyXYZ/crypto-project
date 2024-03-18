import Image from 'next/image'
import React from 'react'

const WhyCrapo = () => {
  return (
    <div className='w-full bg-[#0D0D2B] py-12'>
        <div className='flex justify-center sm:justify-between flex-col sm:flex-row gap-12 sm:gap-0 items-center container mx-auto'>

            <div>
                <Image src='/assets/about.png' className='w-full h-full object-contain' width={600} height={600}/>
            </div>

            <div className='flex flex-col justify-center sm:items-start items-center text-center sm:text-start gap-8'>
                <p className='text-[42px] font-black sm:w-[600px]'>Why you should choose CRAPPO</p>
                <p className='text-gray-400 w-[350px] sm:w-[500px]'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                <button className='py-2 px-4 text-[24px] font-bold bg-[#3671E9] rounded-full'>Learn More</button>
            </div>

        </div>
    </div>
  )
}

export default WhyCrapo
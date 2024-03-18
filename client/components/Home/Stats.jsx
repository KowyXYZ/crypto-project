import Image from 'next/image'
import React from 'react'

const Stats = () => {
  return (
    <div className='w-full bg-[#0D0D2B] py-12'>
        <div className='flex justify-center sm:justify-between flex-col sm:flex-row gap-10 sm:gap-0 items-center  container mx-auto'>

          <div className='flex justify-between sm:justify-center items-center gap-3'>
            <div className='p-4 bg-[#fff] rounded-full bg-opacity-10 hidden sm:flex w-[60px]'>
             <Image src='/assets/stats.png' width={500} height={500} className='object-contain w-full'/>
            </div>
          
            <div className='flex items-center sm:items-start justify-center flex-col '>
              <p className='text-[36px] font-bold uppercase'>$30B</p>
              <p className='text-gray-400'>Digital Currency Exchanged</p>
            </div>
          </div>


          

          <div className='flex justify-center items-center gap-3'>
            <div className='p-4 bg-[#fff] rounded-full bg-opacity-10 hidden sm:flex  w-[60px]'>
             <Image src='/assets/user.png' width={500} height={500} className='object-contain w-full'/>
            </div>
          
            <div className='flex items-center sm:items-start justify-center flex-col '>
              <p className='text-[36px] font-bold uppercase'>10M+</p>
              <p className='text-gray-400'>Trusted Wallets Investor</p>
            </div>
          </div>




            <div className='flex justify-center items-center gap-3'>
            <div className='p-4 bg-[#fff] rounded-full bg-opacity-10 hidden sm:flex  w-[60px]'>
             <Image src='/assets/globe.png' width={500} height={500} className='object-contain w-full'/>
            </div>
          
            <div className='flex items-center sm:items-start justify-center flex-col '>
              <p className='text-[36px] font-bold uppercase'>195</p>
              <p className='text-gray-400'>Countries Supported</p>
            </div>
          </div>


        </div>
    </div>
  )
}

export default Stats
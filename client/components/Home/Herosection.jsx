import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <div className='w-full bg-[#0D0D2B] py-12'>
        <div className='flex items-center justify-between container mx-auto flex-col sm:flex-row gap-8 sm:gap-0'>
          <div className='flex flex-col justify-center sm:justify-start items-center sm:items-start gap-8'>
              <div className='p-1.5 pr-4 rounded-full bg-[#fff] bg-opacity-10  justify-center items-center text-[16px] sm:text-[18px] flex gap-2'>
                <p className='bg-[#fff] sm:px-4 px-2 py-1 text-[#131313] font-black   rounded-full'>75% SAVE</p>
                <p>For the Black Friday weekend</p>
              </div>

              <div className='flex flex-col gap-5 items-center text-center sm:text-start sm:items-start justify-center'>
                <p className='uppercase sm:w-[700px] font-black text-[32px] sm:text-[50px]'>Fastest & secure platform to invest in crypto</p>
                <p className='text-gray-300 capitalize text-[18px] sm:text-[20px] sm:w-[500px]'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
                <button className='bg-[#3671E9] rounded-full flex p-5 text-[20px] gap-2 justify-center items-center'>Try for FREE <Image src='/assets/arrow.png' width={30} height={30}/></button>
                
              </div>
          </div>


          <div>
            <Image src='/assets/heroimg.png' width={600} height={600} className='object-contain w-full h-full'/>
          </div>
        </div>
    </div>
  )
}

export default Herosection
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#0D0D2B] py-10'>
      <div className='container mx-auto flex-col sm:flex-row flex justify-center sm:justify-between text-center items-center sm:items-start gap-8'>
               <div className='flex gap-5 justify-center items-center'>
                <Image src='/assets/logo.png' width={40} height={40}/>
                <p className='font-black text-[20px] '>CRAPPO</p>
              </div>

             

              <div className='text-[24px] text-center flex flex-col justify-center items-center'>
                <p className='uppercase font-bold w-[300px]'>We Accept Following payment systems</p>
                <div className='flex justify-center items-center gap-4'>
                  <div className='bg-[#E0E0E0] bg-opacity-10 py-1 px-5 rounded-xl mt-5 h-[50px] w-[100px]'>
                    <Image src='/assets/visa.png' width={50} height={50} className='w-full h-full object-contain'/>
                  </div>
                 
                  <div className='bg-[#E0E0E0] bg-opacity-10 py-1 px-5 rounded-xl mt-5 h-[50px] w-[100px]'>
                    <Image src='/assets/mastercard.png' width={50} height={50} className='w-full h-full object-contain'/>
                  </div>


                  <div className='bg-[#E0E0E0] bg-opacity-10 py-1 px-5 rounded-xl mt-5 h-[50px] w-[100px]'>
                    <Image src='/assets/bitcoinlite.png' width={50} height={50} className='w-full h-full object-contain'/>
                  </div>
                </div>
              </div>
      </div>

      <div className='flex justify-center items-center pt-12 '>
        <h1 className='underline'>@KowyXYZ 2024</h1>
      </div>
    </div>
  )
}

export default Footer
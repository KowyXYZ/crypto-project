import Image from 'next/image'
import React from 'react'

const Invest = () => {
  return (
    <div className='w-full bg-[#2B076E] py-10'>
        <div className='flex  flex-col  container gap-12 mx-auto text-center'>
           <div className='flex justify-center items-center'>
           <h1 className='text-[36px] font-black w-[300px] sm:w-full'>Market sentiments, portfolio, and run the infrastructure of your choice</h1>
           </div>

            <div className='flex justify-between items-center mt-12 flex-col sm:flex-row'>
                <div className='flex flex-col justify-center sm:items-start items-center text-center sm:text-start gap-8'>
                    <p className='text-[42px] font-black sm:w-[600px]'>Invest Smart</p>
                    <p className='text-gray-400 w-[350px] sm:w-[600px]'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                    <button className='py-2 px-4 text-[24px] font-bold bg-[#3671E9] rounded-full'>Learn More</button>
                </div>

                <div className='flex justify-center items-center mt-12 sm:mt-0'>
                    <Image src='/assets/chart.png' width={600} height={600} className='object-contain  w-full h-full' alt='start'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invest
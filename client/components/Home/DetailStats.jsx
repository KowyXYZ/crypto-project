import Image from 'next/image'
import React from 'react'

const DetailStats = () => {
  return (
    <div className='w-full bg-[#2B076E] py-20'>
        <div className='flex  flex-col  container gap-12 mx-auto text-center'>
            <div className='flex justify-between items-center mt-12 flex-col sm:flex-row-reverse '>
                <div className='flex flex-col justify-center sm:items-start items-center text-center sm:text-start gap-8'>
                    <p className='text-[42px] font-black sm:w-[600px]'>Detailed Statistics</p>
                    <p className='text-gray-400 w-[350px] sm:w-[600px]'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
                    <button className='py-2 px-4 text-[24px] font-bold bg-[#3671E9] rounded-full'>Learn More</button>
                </div>

                <div className='flex justify-center items-center mt-12 sm:mt-0'>
                    <Image src='/assets/graph.png' width={700} height={700} className='object-contain  w-full h-full' alt='start'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailStats
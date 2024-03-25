import React from 'react'

const Transfer = () => {
  return (
    <div className='w-full py-24 bg-[#0D0D2B]'>
        <div className='container mx-auto flex items-center justify-center flex-col'>
            <h1 className='text-[32px] font-black uppercase'>Transfer Ethereum Cryptocurrency</h1>

            <div>
                <form className='mt-12 flex flex-col gap-8'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <label className='text-[20px]'>Address To:</label>
                        <input type="text" placeholder='address to ...' name='addressTo' className='p-2 rounded-2xl w-[450px]' />
                    </div>

                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <label className='text-[20px]'>Amount</label>
                        <input type="text" placeholder='amount ...' name='amount' className='p-2 rounded-2xl w-[450px]' />
                    </div>

                    <button className='rounded-full bg-[#3671E9] py-2 px-6'>Send Now</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Transfer
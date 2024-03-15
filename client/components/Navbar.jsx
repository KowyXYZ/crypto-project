"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full bg-[#0D0D2B] py-4'>
      <div className='flex relative justify-between items-center md:container md:mx-auto mx-8'>

            <div className='flex gap-5 justify-center items-center'>
              <Image src='/assets/logo.png' width={40} height={40}/>
              <p className='font-black text-[20px] '>CRAPPO</p>
            </div>

            <div className='md:flex hidden gap-8 justify-center flex-wrap items-center text-[18px]'>
              <Link href='/'>Home</Link>
              <Link href='/'>Features</Link>
              <Link href='/'>About</Link>
              <div className='h-[30px] w-[1px] bg-[#fff]'/>
              <Link className='rounded-full bg-[#3671E9] py-2 px-6' href='/'>Sign In</Link>
            </div>

            <div className='md:hidden flex justify-center items-center'>
              {toggle ? <p onClick={() => setToggle(!toggle)} className='font-black text-[20px]'>X</p> : <p onClick={() => setToggle(!toggle)} className='font-black text-[20px]'>Q</p>}
              {toggle ? 
              <div className='absolute border-2 flex top-12 bg-[#0D0D2B] flex-col right-0 gap-2 rounded-2xl justify-center items-center p-2'>
                  <Link href='/'>Home</Link>
                  <Link href='/'>Features</Link>
                  <Link href='/'>About</Link>
                
                  <Link className='rounded-full bg-[#3671E9] py-2 px-6' href='/'>Sign In</Link>
              </div>
              : <></>}
            </div>
        </div>
    </div>
  )
}

export default Navbar
"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = async() => {
    if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        //Meta mask installed
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        console.log(accounts[0])
        setWalletAddress(accounts[0])
      } catch (error) {
        // Metamask not installed
        console.log(error)
      }
    }
  }

  const getCurrentWalletConnected = async() => {
    if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        //Meta mask installed
        const accounts = await window.ethereum.request({method: "eth_accounts"});
        if(accounts.length > 0) {
          console.log(accounts[0])
          setWalletAddress(accounts[0])
        } else {
          console.log('Connect to metamask using the connect the wallet button')
        }
      
      } catch (error) {
        // Metamask not installed
        console.log(error)
      }
    }
  }

  const addWalletListener = async() => {
    if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0])
        console.log(accounts[0])
      })
    }else {
      setWalletAddress("")
      console.log('Please install metamask!')
    }
  }

  useEffect(() => {
    getCurrentWalletConnected()
    addWalletListener()
  }, [])
  

  return (
    <div className='w-full bg-[#0D0D2B] py-4'>
      <div className='flex relative justify-between items-center md:container md:mx-auto mx-8'>

            <div className='flex gap-5 justify-center items-center'>
              <Image src='/assets/logo.png' width={40} height={40} alt='test'/>
              <p className='font-black text-[20px] '>CRAPPO</p>
            </div>

            <div className='md:flex hidden gap-8 justify-center flex-wrap items-center text-[18px]'>
              <Link href='/'>Home</Link>
              <Link href='/features'>Features</Link>
              <Link href='/'>About</Link>
              <div className='h-[30px] w-[1px] bg-[#fff]'/>
              <button onClick={connectWallet} className='rounded-full bg-[#3671E9] py-2 px-6' href='/'>
                {walletAddress && walletAddress.length > 0 ? <span>Connected: {walletAddress.slice(0, 5)}...{walletAddress.slice(38,42)}</span> : <span>Connect The Wallet</span>}
              </button>
            </div>

            <div className='md:hidden flex justify-center items-center'>
              {toggle ? <p onClick={() => setToggle(!toggle)} className='font-black text-[20px]'>X</p> : <p onClick={() => setToggle(!toggle)} className='font-black text-[20px]'>Q</p>}
              {toggle ? 
              <div className='absolute border-2 flex top-12 bg-[#0D0D2B] flex-col right-0 gap-2 rounded-2xl justify-center items-center p-2'>
                  <Link href='/'>Home</Link>
                  <Link href='/'>Features</Link>
                  <Link href='/'>About</Link>
                
                  <button className='rounded-full bg-[#3671E9] py-2 px-6' href='/'>Connect Wallet</button>
              </div>
              : <></>}
            </div>
        </div>
    </div>
  )
}

export default Navbar
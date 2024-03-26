"use client"

import { contractAbi, contractAddress } from '@utils/constants'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import BN from "bn.js";



const getEthereumContract = () => {
    let transactionContract;
    if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = provider.getSigner()
        const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer)
    }
   

    return transactionContract
}

const Transfer = () => {

    const [transactionCount, setTransactionCount] = useState(0)

    const [allTransactions, setallTransactions] = useState([])

    const [connectedAccount, setConnectedAccount] = useState('')

    const [addressTo, setAddressTo] = useState('')
   
    const [amount, setAmount] = useState('')


      const sendTransaction = async() => {
        try {
            const transactionContract = getEthereumContract()

            const parsedAmount = ethers.parseEther(amount)
            const parsedAmountBN = new BN(parsedAmount, 10)

           
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: connectedAccount,
                    to: addressTo,
                    value: parsedAmountBN.toString(16),
                }]
            })

            const transactionHash = await transactionContract.addToBlock(addressTo, parsedAmount)
            console.log(`Loading - ${transactionHash.hash}`)
            await transactionHash.wait()
            console.log(`Success - ${transactionHash.hash}`)
            

        } catch (error) {
            console.log(error)
            alert(error)
        }
      }


      
 
    const getCurrentWalletConnected = async() => {
        if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
          try {
            //Meta mask installed
            const accounts = await window.ethereum.request({method: "eth_accounts"});
            if(accounts.length > 0) {
              console.log('account connected on features page' + accounts[0])
              setConnectedAccount(accounts[0])
              
            } else {
              console.log('Connect to metamask using the connect the wallet button')
            }
          
          } catch (error) {
            // Metamask not installed
            console.log(error)
          }
        }
      }

      useEffect(() => {
        getCurrentWalletConnected()

        // if(connectedAccount[0]) {
        //     getAllTransactionsWeb()
        // }
      }, [connectedAccount])



      
    //   const getAllTransactionsWeb = async() => {
    //         try {
    //             if(connectedAccount[0]) {
    //                 const transactionContract =  getEthereumContract()
    //               const allTransactions = await transactionContract.getAllTransactions()
    //               console.log(allTransactions)

    //                 const structTransactions = allTransactions.map((transactionitem) => ({
    //                     addressTo: transactionitem.receiver,
    //                     addressFrom: transactionitem.sender,
    //                 value: transactionitem.value,
    //         }))
    //               setallTransactions(structTransactions)
    //             }
                
           
    //         } catch (error) {
    //             console.log(error)
    //         }
    //   }


  return (
    <div className='w-full py-24 bg-[#0D0D2B]'>
        <div className='container mx-auto flex items-center justify-center flex-col'>
            <h1 className='text-[32px] font-black uppercase'>Transfer Ethereum Cryptocurrency</h1>

            <div>
                <form className='mt-12 flex flex-col gap-8'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <label className='text-[20px]'>Address To:</label>
                        <input onChange={(e) => setAddressTo(e.target.value)} type="text" placeholder='address to ...' name='addressTo' className='p-2 rounded-2xl w-[300px] sm:w-[450px]' />
                    </div>

                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <label className='text-[20px]'>Amount</label>
                        <input onChange={(e) => setAmount(e.target.value)} type="text" placeholder='amount ...' name='amount' className='p-2 rounded-2xl w-[300px] sm:w-[450px]' />
                    </div>

                    <button onClick={sendTransaction} className='rounded-full bg-[#3671E9] py-2 px-6'>Send Now</button>
                </form>
            </div>

            {/* <div className='mt-12'>
                {connectedAccount.length > 1 ? 
                 <div className='flex flex-col justify-center items-center'>  
                     <p className='text-[24px] font-black'>Latest Transactions</p>
                     {allTransactions.map((trans, index) => {
                        return (
                            <div>
                                <p>{trans.addressFrom}</p>
                                <p>{trans.addressTo}</p>
                                <p>{trans.value}</p>
                            </div>
                        )
                     })}
                </div> :
                
                <div>
                    <p className='text-[24px] font-black'>Connect Your Metamask Account to check latest Transactions</p>
                </div>
                }
            </div> */}
        </div>

    </div>
  )
}

export default Transfer
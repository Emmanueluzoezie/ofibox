"use client"
import { WalletButton } from '@/context/WalletContextProvider'
import { createNftCollection } from '@/utils/createNftCollection'
import { umi } from '@/utils/data'
import { useWallet } from '@solana/wallet-adapter-react'
import React, { useEffect } from 'react'

const HeaderComponent = () => {
  const wallet = useWallet()

const testing = async() => {
  await createNftCollection(umi, wallet, "CNFT TEST")
}

  // useEffect(() => {
  //   createNftCollection(umi, wallet, "CNFT TEST" )
  // }, [wallet])

  return (
    <div className=''>
        <h2>OFIBOX</h2>
        <h3>Create your game asset in minutes.</h3>
        <button className='my-2 p-2 bg-blue-800 block' onClick={testing}>Transfer 0.01</button>
        <WalletButton />
    </div>
  )
}

export default HeaderComponent
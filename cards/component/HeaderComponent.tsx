"use client"
import { WalletButton } from '@/context/WalletContextProvider'
import React from 'react'

const HeaderComponent = () => {

  return (
    <div className=''>
        <h2>OFIBOX</h2>
        <h3>Create your game asset in minutes.</h3>
        {/* <button className='my-2 p-2 bg-blue-800 block' onClick={testing}>Transfer 0.01</button> */}
        <WalletButton />
    </div>
  )
}

export default HeaderComponent
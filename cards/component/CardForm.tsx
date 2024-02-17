"use client"
import { transfer } from '@/utils/tranfer';
import { WalletSignTransactionError } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react'

const CardForm = () => {
  const wallet = useWallet()

  const MintNftForNewUser = async () => {
    try {
      await transfer(wallet, 0.015)
    } catch (error) {
      if (error instanceof WalletSignTransactionError) {
        console.log("Plenty error");
      } else {
        console.log("Error:", error);
      }
    }
  }

  const MintNftForExistingUser = async() => {
    try {
      await transfer(wallet, 0.015)
    } catch (error) {
      if (error instanceof WalletSignTransactionError) {
        console.log("Plenty error");
      } else {
        console.log("Error:", error);
      }
    }
  }  

  return (
    <div>CardForm</div>
  )
}

export default CardForm
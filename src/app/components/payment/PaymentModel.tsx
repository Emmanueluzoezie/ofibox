import React, { useState } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md';
import QrCodePayment from './QrCodePayment';
import SuccessComponent from './SuccessComponent';
import { setShowPermissionToProceed } from '@/slice/CardSlice';
import { selectValidatedTransaction, setIsPaymentCompleted, setShowPaymentModal, setValidatedTransaction } from '@/slice/PaymentSlice';
import { useDynamicContext, useSendBalance } from '@dynamic-labs/sdk-react-core';
import { useDispatch, useSelector } from 'react-redux';
import { selectAmountToBeDebited } from '@/slice/userSlice';

const PaymentModel = () => {
  const [showPaymentOption, setShowPaymentOption] = useState(true)
  // const [disableClickButton, setDisableClickButton] = useState(false)
  const { user } = useDynamicContext();
  const validatedTransaction = useSelector(selectValidatedTransaction)
  const paymentAmount = useSelector(selectAmountToBeDebited)
  const dispatch = useDispatch()
  const { open } = useSendBalance();

  const WalletAddress = process.env.NEXT_PUBLIC_OFIBOX_ADDRESS

    const handleWalletPayment = async() => {
        try {
          if(!paymentAmount || !WalletAddress){
            return
          }
          const tx = await open({
            recipientAddress: WalletAddress,
            value:  BigInt(0.015 * 1000000000),
          });
          
          dispatch(setValidatedTransaction(true))
          dispatch(setIsPaymentCompleted(true))
        } catch (err) {
          // Handle the promise rejection, e.g., transaction failed
      }
    };

    const handleBack = () => {
      dispatch(setShowPaymentModal(false))
      setShowPaymentOption(false)
      dispatch(setShowPermissionToProceed(true))
    }

  return (
    <div className='fixed top-0 w-full h-full'>
      <div className='h-full z-40 relative'>
        <div className='absolute top-0 opacity-80 bg-zinc-800 w-full h-full' />
        <div className='flex justify-center items-center h-full z-40 relative px-6'>
          <div className='bg-zinc-900 p-3 rounded-xl max-w-[500px]'>
            {user === undefined ? (
              <div className='w-[350px] shadow-2xl pt-4 bg-white rounded-2xl'>
                <p className='text-[16px] px-4 pb-4 text-center'>You are not login</p>
                <div className='flex justify-center pb-8'>
                  <button>
                    login
                  </button>
                </div>
              </div>
            ) : validatedTransaction ? (
              <SuccessComponent />
              
            ) : (
              <>
                {showPaymentOption ? (
                  <div className="p-4 relative">
                    <MdKeyboardBackspace className='text-2xl text-zinc-50 cursor-pointer absolute -top-1 left-2' onClick={handleBack}/>
                  <h2 className='font-bold text-[14px] font-mono text-zinc-50 text-center pb-6'>Click on your preferred payment option</h2>
                  <button className='w-full bg-yellow-300 my-2 p-2 font-bold px-10 rounded-md' onClick={handleWalletPayment}>Pay with wallet</button>
                  <button className='w-full bg-yellow-300 my-1 p-2 font-bold px-10 rounded-md' onClick={() => setShowPaymentOption(false)}>Pay with QR code</button>
                </div>
                ) : (
                  <div className='bg-yellow-300 p-2 rounded-2xl'>
                    <div className='flex items-center '>
                    <MdKeyboardBackspace className='text-2xl cursor-default' onClick={() => setShowPaymentOption(true)}/>
                      <h2 className='flex-1 font-semibold text-center text-xl'>Scan to pay</h2>
                    </div>
                    <QrCodePayment />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentModel
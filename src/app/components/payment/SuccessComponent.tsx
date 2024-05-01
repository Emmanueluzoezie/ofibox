"use client"
import { selectValidatedTransaction, setIsPaymentCompleted, setShowPaymentModal, setValidatedTransaction } from '@/slice/PaymentSlice';
import React, { useEffect } from 'react'
import { GiCheckMark } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';

const SuccessComponent = () => {
  const validatedTransaction = useSelector(selectValidatedTransaction)
  const dispatch = useDispatch()

  useEffect(() => {
    if (validatedTransaction) {
      const waitForPayment = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        dispatch(setIsPaymentCompleted(true));
        dispatch(setValidatedTransaction(false))
        dispatch(setShowPaymentModal(false))
      };
      waitForPayment();
    }
  }, [validatedTransaction]);
  
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
          <h2 className='text-[18px] font-semibold'>Transaction successful completed</h2>
          <div className='rounded-full p-4 bg-green-600 w-fit'>
              <GiCheckMark className='text-6xl text-white' />
          </div>
    </div>
  )
}

export default SuccessComponent
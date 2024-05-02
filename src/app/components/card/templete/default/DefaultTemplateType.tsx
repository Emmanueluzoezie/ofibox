import { setCurrentTempalte, setCurrentTemplateId,  setImageInput } from '@/slice/CardSlice'
import { selectAmountToBeDebited, setAmountToBeDebited } from '@/slice/PaymentSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DefaultTemplateType = () => {
  const dispatch = useDispatch()
  
  const cardCreationAmount = process.env.NEXT_PUBLIC_PAYMENT_AMOUNT

  const handleTemplateChange = () => {
    dispatch(setCurrentTempalte("default"))
    dispatch(setImageInput("https://res.cloudinary.com/dj87af1qg/image/upload/v1711644499/crawel_xc3qnj.png"));
    dispatch(setCurrentTemplateId("default_template_id"));
    dispatch(setAmountToBeDebited({
      creation: Number(cardCreationAmount),
      template: 0.5,
      total: 0
    }))
  }

  return (
    <button className="flex h-[107px] w-[80px] items-center justify-center rounded-md bg-white shadow-lg" onClick={handleTemplateChange}>
          <Image src="https://res.cloudinary.com/dj87af1qg/image/upload/v1711641946/craw_u6yxi7.png" alt="" className='w-full h-full' width={100} height={100}/>
      </button>
  )
}

export default DefaultTemplateType
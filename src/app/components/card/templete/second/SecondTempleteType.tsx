"use client"
import React from 'react'
import { setCurrentTempalte, setCurrentTemplateId, setImageInput, } from '@/slice/CardSlice'
import { useDispatch } from 'react-redux'
import Image from 'next/image'

const SecondTempleteType = () => {
  const dispatch = useDispatch()

  const handleTemplateChange = () => {
    dispatch(setCurrentTempalte("second"))
    dispatch(setImageInput("https://res.cloudinary.com/dulqfh3po/image/upload/v1712277589/0_1_lei38r.png"));
    dispatch(setCurrentTemplateId("second_template_id"));
  }

  return (
    <button className="flex h-[107px] w-[80px] items-center justify-center rounded-md bg-white shadow-lg" onClick={handleTemplateChange}>
      <Image src="https://res.cloudinary.com/dj87af1qg/image/upload/v1711820423/template2_je4lva.png" alt="" className='w-full h-full' width={100} height={100} />
    </button>
  )
}

export default SecondTempleteType
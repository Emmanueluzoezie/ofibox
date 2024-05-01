import { setCurrentTempalte, setCurrentTemplateId,  setImageInput } from '@/slice/CardSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

const DefaultTemplateType = () => {
  const dispatch = useDispatch()

  const handleTemplateChange = () => {
    dispatch(setCurrentTempalte("default"))
    dispatch(setImageInput("https://res.cloudinary.com/dj87af1qg/image/upload/v1711644499/crawel_xc3qnj.png"));
    dispatch(setCurrentTemplateId("default_template_id"));
  }

  return (
    <button className="flex h-[107px] w-[80px] items-center justify-center rounded-md bg-white shadow-lg" onClick={handleTemplateChange}>
          <Image src="https://res.cloudinary.com/dj87af1qg/image/upload/v1711641946/craw_u6yxi7.png" alt="" className='w-full h-full' width={100} height={100}/>
      </button>
  )
}

export default DefaultTemplateType
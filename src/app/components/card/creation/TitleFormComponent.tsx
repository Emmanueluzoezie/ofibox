"use client"
import { setTitleInput } from '@/slice/CardSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TitleFormComponent = () => {
  const dispatch = useDispatch()

  const handleChange = (e: any) => {
    dispatch(setTitleInput(e.target.value))
  }


  return (
    <div className=" w-8/12 mx-auto mt-3 lg:mt-5">
      <input type="text" placeholder="Card Title" className=" text-zinc-200 bg-zinc-900 w-full h-9 px-3 rounded border-0 outline-none" maxLength={14} onChange={handleChange} />
    </div>
  )
}

export default TitleFormComponent
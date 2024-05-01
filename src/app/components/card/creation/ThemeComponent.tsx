"use client"
import { setThemeInput } from '@/slice/CardSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ThemeComponent = () => {
    const dispatch = useDispatch()

    const handleChange = (e: any) => {
        dispatch(setThemeInput(e.target.value))
    }

    return (
        <div className='w-full flex items-center'>
            <div className='py-1 w-[200px]'>
                <h2 className='text-[14px] font-semibold'>Theme</h2>
            </div>
            <div className='px-4 w-full'>
                <input type="text" className='w-full outline-none bg-inherit px-2 border-b-2 border-red-500' maxLength={30} onChange={handleChange} />
            </div>
        </div>
    )
}

export default ThemeComponent
import { setShowWhitePaper } from '@/slice/AppSlice'
import React from 'react'
import { MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'

const WhitePaperComponent = () => {
    const dispatch = useDispatch()

    
    return (
        <div className='fixed top-0 w-full h-full z-50'>
            <div className="relative w-full h-full z-50">
                <div className='absolute top-0 opacity-80 bg-gray-600 w-full h-full' />
                <div className='flex h-full w-full z-50 relative p-4'>
                    <div className='w-full h-full shadow-2xl pt-4 bg-zinc-900 rounded'>
                        <MdClose  className='text-[30px] ml-4 text-yellow-300 cursor-pointer' onClick={() => dispatch(setShowWhitePaper(false))}/>
                        <p className='text-[16px] px-4 pb-4 text-center text-zinc-200'>White paper coming soon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhitePaperComponent
import { testingImage } from '@/lib/data'
import { setImageInput } from '@/slice/CardSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ImageTempletes = () => {
    const dispatch = useDispatch()

    const handleClickedImage = (image: string) => {
            dispatch(setImageInput(image))
        
    }

    return (
        <div className='h-[500px] lg:h-full pt-4'>
            <h2 className='font-semibold text-[12px] text-center'>Images</h2>
            <div className='py-2 pl-[4px] overflow-scroll h-[430px] lg:h-full lg:h-inherit space-y-[5px] lg:space-y-[15px] pb-6 lg:px-4'>
                {testingImage.map((image: string) => (
                    <div className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] border-2 flex flex-col cursor-pointer' onClick={() => handleClickedImage(image)} key={image}>
                        <Image src={image} className="w-full h-full" width={100} height={100} alt="" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ImageTempletes
import { selectActionInput, selectImageInput, selectPriceInput, selectRankInput, selectRuleInput, selectShowImageLoader, selectTitleInput, selectTollInput } from '@/slice/CardSlice'
import Image from 'next/image'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'

const SecondTemplete = () => {
    const titleInput = useSelector(selectTitleInput)
    const actionInput = useSelector(selectActionInput)
    const priceInput = useSelector(selectPriceInput)
    const rankInput = useSelector(selectRankInput)
    const ruleInput = useSelector(selectRuleInput)
    const tollInput = useSelector(selectTollInput)
    const imageInput = useSelector(selectImageInput)
    const imageLoading = useSelector(selectShowImageLoader)

    return (
        <>
        <div className="h-[280px] w-[210px] content-evenly p-2 bg-gray-100 relative" id='second_template_id'>
            <div className="mx-auto h-[100%] w-12/12 bg-white">
                <div className="relative">
                    <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center overflow-clip text-balance rounded bg-white text-lg font-black italic">{rankInput}</div>
                    <p className="r absolute left-1 top-1 flex h-6 w-36 items-center justify-center bg-white text-sm font-bold uppercase text-gray-800">{titleInput}</p>
                    <div className="absolute left-1 top-8 flex items-center bg-white text-gray-800">
                        <p className={`flex h-6 w-6 items-center justify-center text-white ${actionInput === "pay" || actionInput === "miss turn" || actionInput === "back" ? "bg-red-400" : "bg-green-400"}`}>
                            {actionInput === "collect" && "+"}
                            {actionInput === "pay" && "-"}
                            {actionInput === "forward" && ">"}
                            {actionInput === "back" && "<"}
                            {actionInput === "miss turn" && "U"}
                        </p>
                        <p className="flex h-6 w-10 justify-center font-mono text-base font-bold">{tollInput}</p>
                    </div>

                    <p className="absolute bottom-16 right-20 flex h-6 w-14 items-center justify-center rounded-t-md bg-green-500 text-white">${priceInput}</p>
                    <div className="absolute inset-x-0 bottom-1 right-0 mx-auto w-11/12 rounded-md bg-white p-1 text-xs h-[64px]">
                        <p className='break-words w-full'>{ruleInput}</p>
                    </div>

                    {imageLoading? 
                        <div className='w-[215px] h-[265px] bg-[#d2d2d2]'/>
                        :
                        <Image src={imageInput} objectFit='contain' className=" w-[215px] h-[265px]  object-cover" width={300} height={300} alt='' />
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default SecondTemplete
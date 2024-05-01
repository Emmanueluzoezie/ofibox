import { selectActionInput, selectImageInput, selectShowImageLoader, selectPriceInput, selectRankInput, selectRuleInput, selectThemeInput, selectTitleInput, selectTollInput } from '@/slice/CardSlice'
import Image from 'next/image'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'

const DefaultTemplete = () => {
    const titleInput = useSelector(selectTitleInput)
    const actionInput = useSelector(selectActionInput)
    const priceInput = useSelector(selectPriceInput)
    const rankInput = useSelector(selectRankInput)
    const ruleInput = useSelector(selectRuleInput)
    const themeInput = useSelector(selectThemeInput)
    const tollInput = useSelector(selectTollInput)
    const imageInput = useSelector(selectImageInput)
    const imageLoading = useSelector(selectShowImageLoader)

    return (
        <>
            <div className="h-[280px] w-[210px] bg-gray-100 p-2 content-evenly" id="default_template_id">
             <div className=" bg-white w-12/12 h-[100%] mx-auto">
                 <div className="relative ">
                     <div className=" absolute overflow-clip right-2 top-2 text-2xl font-black text-balance w-8 h-8 bg-yellow-300 rounded-full flex italic justify-center items-center">
                         {rankInput}
                     </div>
                     <p className="r absolute left-1 top-1 flex h-6 w-36 items-center justify-center bg-yellow-400 text-sm font-bold uppercase text-gray-800">{titleInput}</p>
                     <div className="absolute left-1 top-8 flex items-center bg-yellow-400 text-gray-800">
                         <p className={`flex h-6 w-6 items-center justify-center text-white ${actionInput === "pay" || actionInput === "miss turn" || actionInput === "back"? "bg-red-400" : "bg-green-400"}`}>
                             {actionInput === "collect" && "+"}
                             {actionInput === "pay" && "-"}
                             {actionInput === "forward" && ">"}
                             {actionInput === "back" && "<"}
                             {actionInput === "miss turn" && "U"}
                         </p>
                         <p className="flex h-6 w-10 justify-center font-mono text-base font-bold">{tollInput}</p>
                     </div>
                     <p className=" absolute bottom-16 right-0 bg-green-500 py-1 w-max px-6 text-white ">${priceInput}</p>
                     <p className=" absolute bottom-0 right-0 text-xs  bg-yellow-300 p-2 h-[64px] w-full break-words">{ruleInput}</p>
                     {imageLoading? 
                        <div className='w-[215px] h-[285px] bg-[#d2d2d2]'/>
                        :
                        <Image src={imageInput} objectFit='contain' className=" w-[215px] h-[265px]  object-cover" width={100} height={100} alt='' />
                    }
                    </div>
             </div>
         </div>
        </>
    )
}

export default DefaultTemplete
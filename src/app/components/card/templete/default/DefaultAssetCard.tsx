

import { selectCurrentAssetScreen } from '@/slice/AppSlice';
import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

interface DefaultAssetCardProps {
    card: Card;
}

const DefaultAssetCard: React.FC<DefaultAssetCardProps> = ({ card }) => {
    const dispatch = useDispatch()

    const currentStoreScreen = useSelector(selectCurrentAssetScreen)

    const handleAddToDeck = () => {
        // // get user id
        // dispatch(setCardId(card.id))
        // dispatch(setShowDeckForm(true))
        // dispatch(setIsBlur(true))
    }

    return (
        <div className='w-fit border-2 bg-gray-100 shadow-2xl'>
            {/* {currentStoreScreen !== "deck" && */}
            <div className='p-2 pl-4 flex items-center justify-between'>
                <div className='p-1 bg-slate-300 rounded-full cursor-pointer'><FaPlus className='text-[14px]' onClick={handleAddToDeck} /></div>
                <h2 className='text-center text-[14px] flex-1'>Add to Deck</h2>
            </div>
            {/* } */}
            <div className="h-[300px] w-[225px] bg-gray-100 content-evenly p-2" >
                <div className=" bg-white w-12/12 mx-auto">
                    <div className="relative ">
                        <div className=" absolute overflow-clip right-2 top-2 text-2xl font-black text-balance w-8 h-8 bg-yellow-300 rounded-full flex italic justify-center items-center">
                            {card.rank}
                        </div>
                        <p className="r absolute left-1 top-1 flex h-6 w-32 items-center justify-center bg-yellow-400 text-sm font-bold uppercase text-gray-800">{card.title}</p>
                        <div className="absolute left-1 top-8 flex items-center bg-yellow-400 text-gray-800">
                            <p className={`flex h-6 w-6 items-center justify-center text-white ${card.action === "pay" || card.action === "miss turn" || card.action === "back" ? "bg-red-400" : "bg-green-400"}`}>
                                {card.action === "collect" && "+"}
                                {card.action === "pay" && "-"}
                                {card.action === "forward" && ">"}
                                {card.action === "back" && "<"}
                                {card.action === "miss turn" && "U"}
                            </p>
                            <p className="flex h-6 w-10 justify-center font-mono text-base font-bold">{card.toll}</p>
                        </div>
                        <p className=" absolute bottom-16 right-0 bg-green-500 py-1 w-max px-6 text-white ">${card.amount}</p>
                        <p className=" absolute bottom-0 right-0 text-xs  bg-yellow-300 p-2 h-[64px] w-full break-words">{card.rule}</p>
                        {card.media && <Image src={card.media} objectFit='contain' className=" w-[215px] h-[285px]  object-cover" width={100} height={100} alt='' />}

                    </div>
                </div>
            </div>
        </div>

    )
}
export default DefaultAssetCard
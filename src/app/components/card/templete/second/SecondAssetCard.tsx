import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { GrStatusGood } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';

interface SecondAssetCardProps {
    card: Card;
}

const SecondAssetCard: React.FC<SecondAssetCardProps> = ({ card }) => {
    const dispatch = useDispatch()

    const handleAddToDeck = () => {
        // get user id
        // dispatch(setCardId(card.id))
        // dispatch(setShowDeckForm(true))
        // dispatch(setIsBlur(true))
    }

    return (
        <div className='w-fit m-2 bg-gray-100 shadow-2xl'>
            {/* {currentStoreScreen !== "deck" && */}
            <div className='p-2 pb-0 pl-4 flex items-center justify-between'>
                <div className='p-1 bg-slate-300 rounded-full cursor-pointer'><FaPlus className='text-[14px]' onClick={handleAddToDeck} /></div>
                <h2 className='text-center text-[14px] flex-1'>Add to Deck</h2>
            </div>
            {/* } */}
            <div className=" h-[300px] w-[225px] content-evenly p-2  relative">
                <div className="mx-auto w-12/12 bg-white ">
                    <div className="relative">
                        <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center overflow-clip text-balance rounded bg-white text-lg font-black italic">{card.rank}</div>
                        <p className="r absolute left-1 top-1 flex h-6 w-32 items-center justify-center bg-white text-sm font-bold uppercase text-gray-800">{card.title}</p>
                        <div className="absolute left-1 top-8 flex items-center bg-white text-gray-800">
                            <p className={`flex h-6 w-6 items-center justify-center text-white ${card.action === "pay" || card.action === "miss turn" || card.action === "back" ? "bg-red-400" : "bg-green-400"}`}>
                                {card.action === "collect" && "+"}
                                {card.action === "pay" && "-"}
                                {card.action === "forward" && ">"}
                                {card.action === "back" && "<"}
                                {card.action === "miss turn" && "U"}
                            </p>
                            <p className="flex h-6 w-10 justify-center font-mono text-base font-bold">{card.toll}</p>
                        </div>

                        <p className="absolute bottom-16 right-20 flex h-6 w-14 items-center justify-center rounded-t-md bg-green-500 text-white">${card.amount}</p>
                        <div className="absolute inset-x-0 bottom-2 right-0 mx-auto w-11/12 rounded-md bg-white p-1 text-xs h-[56px]">
                            <p className='break-words w-full'>{card.rule}</p>
                        </div>
                        {card.media && <Image src={card.media} objectFit='contain' className=" w-[215px] h-[285px]  object-cover" width={100} height={100} alt='' />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SecondAssetCard
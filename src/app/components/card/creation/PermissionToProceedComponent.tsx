import React from 'react'
import { useDispatch } from 'react-redux'
import DisplayCard from './DisplayCard'
import { setShowPermissionToProceed } from '@/slice/CardSlice'

type Props = {
    handleCardCreation: () => void
}

const PermissionToProceedComponent = ({handleCardCreation}: Props) => {

    const dispatch = useDispatch()

    return (
        <div className='w-full fixed h-full top-0 left-0 bg-inherit z-40'>
            <div className='absolute top-0 opacity-20 bg-zinc-900 w-full h-full' />
            <div className='w-full flex justify-center items-center h-full z-40 relative'>
                <div className='w-[350px] shadow-2xl pt-4 rounded-2xl bg-zinc-900 z-50'>
                    <div className='flex justify-center py-4'>
                        <DisplayCard />
                    </div>
                    <p className='text-[13px] px-4 pb-4 text-center font-mono text-zinc-50'>You will be debited 0.015 SOL for creating card</p>
                    <div className="flex mt-4 border-t-2">
                        <button className='w-full p-3 font-bold text-zinc-300' onClick={() => dispatch(setShowPermissionToProceed(false))}>Cancel</button>
                        <button className='w-full p-3 font-bold border-l-2 text-yellow-300' onClick={handleCardCreation}>Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PermissionToProceedComponent
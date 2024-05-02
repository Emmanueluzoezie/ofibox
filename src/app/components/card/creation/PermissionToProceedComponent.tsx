import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayCard from './DisplayCard'
import { setShowAccessibilty, setShowPermissionToProceed } from '@/slice/CardSlice'
import { selectAmountToBeDebited } from '@/slice/PaymentSlice'

type Props = {
    handleCardCreation: () => void
}

const PermissionToProceedComponent = ({handleCardCreation}: Props) => {

    const dispatch = useDispatch()
    const creationAmount = useSelector(selectAmountToBeDebited)


    const handleBack = () => {
        dispatch(setShowAccessibilty(true))
        dispatch(setShowPermissionToProceed(false))
    }

    return (
        <div className='w-full fixed h-full top-0 left-0 bg-inherit z-40'>
            <div className='absolute top-0 opacity-90 bg-zinc-800 w-full h-full' />
            <div className='w-full flex justify-center items-center h-full z-40 relative px-4'>
                <div className='w-[350px] shadow-2xl pt-4 rounded-2xl bg-zinc-900 z-50'>
                    <div className='flex justify-center py-4'>
                        <DisplayCard />
                    </div>
                    <p className='text-[13px] px-4 pb-4 text-center font-mono text-zinc-50'>Amount to pay for your card creation</p>
                    <div className='px-4 secondary-text-color text-[14px]'>
                        <div className='flex items-center '>
                            <h2 className='pr-4'>Card creation: </h2>
                            <h2>${creationAmount.creation}</h2>
                        </div>
                        <div className='flex items-center '>
                            <h2 className='pr-4'>Template: </h2>
                            <h2>${creationAmount.template}</h2>
                        </div>
                        <div className='flex items-center '>
                            <h2 className='pr-4'>Total: </h2>
                            <h2>{creationAmount.total} SOL</h2>
                        </div>
                    </div>
                    <div className="flex mt-6 border-t-2 border-yellow-300">
                        <button className='w-full p-3 font-bold text-zinc-300' onClick={handleBack}>Cancel</button>
                        <button className='w-full p-3 font-bold border-l-2 text-yellow-300' onClick={handleCardCreation}>Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PermissionToProceedComponent
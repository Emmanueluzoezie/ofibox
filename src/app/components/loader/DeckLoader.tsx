import React from 'react'
import { Skeleton } from '../ui/skeleton'

const DeckLoader = () => {
    return (
        <div className='bg-zinc-800 p-3 h-fit w-fit'>
            <div className='flex justify-between pb-2'>
            <Skeleton className="w-[70px] h-[20px] rounded bg-zinc-600" />
            <Skeleton className="w-[70px] h-[20px] rounded bg-zinc-600" />
            </div>
            <div className='flex justify-center'>
            <Skeleton className="w-[200px] h-[20px] rounded bg-zinc-600" />
            </div>
            <div className='p-2'>
                <div className='bg-zinc-800 rounded p-2 relative w-[230px] flex justify-center'>
                    <div className='absolute top-0 left-[5px] z-30'>
                        <Skeleton className="w-[220px] h-[252px] rounded bg-zinc-600 mt-2" />
                    </div>
                    <div className='z-50'>
                        <div className='flex items-center'>
                            <div className='flex-1'>
                                <Skeleton className="w-[150px] mb-1 h-[30px] bg-zinc-500" />
                                <Skeleton className="w-[100px] h-[30px] bg-zinc-500" />
                            </div>
                            <Skeleton className="w-[50px] h-[50px] rounded bg-zinc-500" />
                        </div>
                        <div className='h-[180px]' />
                        <Skeleton className="w-[220px] h-[64px] bg-zinc-500 mt-2" />
                    </div>
                </div>
            </div>
            <Skeleton className="w-full h-[40px] rounded bg-zinc-600" />
        </div>
    )
}

export default DeckLoader
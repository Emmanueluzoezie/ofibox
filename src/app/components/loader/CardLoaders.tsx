import React from 'react'
import CardLoader from './CardLoader'

const CardLoaders = () => {
    return (
        <div className='flex flex-wrap justify-center items-center px-4 max-w-[1300px]'>
            <CardLoader />
            <CardLoader />
            <div className='xs:hidden md:flex'>
                <CardLoader />
            </div>
            <div className='xs:hidden md:flex'>
                <CardLoader />
            </div>
            <div className='xs:hidden lg:flex'>
                <CardLoader />
            </div>
            <div className='xs:hidden lg:flex'>
                <CardLoader />
            </div>
            <div className='xs:hidden lg:flex'>
                <CardLoader />
            </div>
            <div className='xs:hidden lg:flex'>
                <CardLoader />
            </div>
            <div className='xs:hidden xl:flex'>
                <CardLoader />
            </div>
            <div className='xs:hidden xl:flex'>
                <CardLoader />
            </div>
        </div>
    )
}

export default CardLoaders
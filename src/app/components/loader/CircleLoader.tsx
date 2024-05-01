import { selectIsCardCreation } from '@/slice/CardSlice'
import React from 'react'
import { Oval } from "react-loader-spinner"
import { useSelector } from 'react-redux'

const CircleLoader = () => {

  const creatingCard = useSelector(selectIsCardCreation)

  return (
    <div className='h-full w-full fixed top-0 left-0 flex items-center justify-center z-50'>
      <div className={`${creatingCard && "bg-zinc-900 w-[250px] flex justify-center p-4 rounded"}`}>
        <h2 className='text-center secondary-text-color text-[12px] md:text-[18px] py-2'>Creating your card</h2>
        <Oval
          visible={true}
          height="120"
          width="120"
          secondaryColor='#f7d343'
          color="yellow"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  )
}

export default CircleLoader
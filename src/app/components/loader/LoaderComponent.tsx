import { selectLoadingState } from '@/slice/AppSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import CircleLoader from './CircleLoader'
import CardLoader from './CardLoader'

const LoaderComponent = () => {

    const loading = useSelector(selectLoadingState)

  return (
    <div className='z-50'>
        {loading.type === "card"?
        <CardLoader />
        :    
        <CircleLoader />
    }
    </div>
  )
}

export default LoaderComponent
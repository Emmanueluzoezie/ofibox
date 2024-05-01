
import { selectCurrentTemplate } from '@/slice/CardSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import DefaultTemplete from '../templete/default/DefaultTemplete'
import SecondTemplete from '../templete/second/SecondTemplete'

const DisplayCard = () => {
  const currentTemplate = useSelector(selectCurrentTemplate)

  return (
    <>
      {currentTemplate === "default" ?
        (<DefaultTemplete />)
        :
        <SecondTemplete />
      }
    </>
  )
}

export default DisplayCard
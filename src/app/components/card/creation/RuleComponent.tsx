"use client"
import { setRuleInput } from '@/slice/CardSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RuleComponent = () => {
    const dispatch = useDispatch()

    const handleChange = (e: any) => {
        dispatch(setRuleInput(e.target.value))
    }

    return (
        <div className=" flex w-11/12 mx-auto">
            <textarea name="" placeholder=" Describe the rules of this card?..." id="" cols={30} rows={2} maxLength={70} className="text-zinc-50 bg-zinc-900 w-full rounded-md p-1 border-0 outline-none" onChange={handleChange}></textarea>
        </div>
    )
}

export default RuleComponent
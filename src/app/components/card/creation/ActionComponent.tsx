import { selectActionInput, setActionInput } from '@/slice/CardSlice';
import React, { useState } from 'react'
import { MdMoveDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const ActionComponent = () => {
    const dispatch = useDispatch()

    const actionInput = useSelector(selectActionInput)

    const handleSelectedAction = (clicked: string) => {
        dispatch(setActionInput(clicked))
    }

    return (
        <div className=" w-4/12 h-9 bg-zinc-900 flex items-center justify-center rounded">
            <select className="bg-zinc-900 border-0 outline-0 text-zinc-200 h-8 w-11/12 text-xs uppercase tracking-widest font-medium" onChange={(e) => handleSelectedAction(e.target.value)}>
                <option value="pay">Pay</option>
                <option value="collect">Collect</option>
                <option value="back">Back</option>
                <option value="forward">Forward</option>
                <option value="miss turn">Miss turn</option>
            </select>
        </div>

    );
}

export default ActionComponent
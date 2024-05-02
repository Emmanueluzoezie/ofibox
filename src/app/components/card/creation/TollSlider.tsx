"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../../ui/slider';
import { selectActionInput, selectTollCurrency, selectTollInput, setTollInput } from '@/slice/CardSlice';

const TollSlider = () => {
    const dispatch = useDispatch()

    const tollInput = useSelector(selectTollInput);
    const action = useSelector(selectActionInput);
    const tollCurrency = useSelector(selectTollCurrency);

    const handleSliderChange = (newValue: number[]) => {
        const newValueAsNumber = newValue[0];
        dispatch(setTollInput(newValueAsNumber));
    };

    const multiplyToll = (number: number) => {
        dispatch(setTollInput(tollInput * number))
    }

    return (
        <div className="w-11/12 mx-auto">
             <div className=" flex justify-between uppercase text-xs pb-[8px] label-color font-sans w-full items-center">
                  <p className="">toll</p>
                  <p className=" font-bold font-mono text-[12px]">
                    {tollInput}
                    {(action === "pay" || action === "collect") && <span className='pl-1'>{tollCurrency}</span>}    
                </p>
                  <div className=''>
                    <button className='border-[1px] py-[1px] px-[4px] mx-1 rounded text-[10px] font-light' onClick={() => dispatch(setTollInput(0))}>Reset</button>
                    <button className='border-[1px] py-[1px] px-[4px] mx-1 rounded text-[10px] font-light' onClick={() => multiplyToll(2)}>x2</button>
                    <button className='border-[1px] py-[1px] px-[4px] mx-1 rounded text-[10px] font-light' onClick={() => multiplyToll(3)}>x3</button>
                    <button className='border-[1px] py-[1px] px-[4px] mx-1 rounded text-[10px] font-light' onClick={() => multiplyToll(4)}>x4</button>
                    <button className='border-[1px] py-[1px] px-[4px] mx-1 rounded text-[10px] font-light' onClick={() => multiplyToll(5)}>x5</button>
                  </div>
                </div>
            <Slider onValueChange={handleSliderChange} min={1} max={100} className="bg-red-600 rounded-2xl" />
        </div>
    );
}

export default TollSlider
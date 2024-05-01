"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  setPriceInput } from '@/slice/CardSlice';
import { Slider } from '../../ui/slider';

const PriceComponent = () => {
    const dispatch = useDispatch()

    const handleSliderChange = (newValue: number[]) => {
            const newValueAsNumber = newValue[0];
            dispatch(setPriceInput(newValueAsNumber));
    };

    return (
        <div className=" w-11/12">
            <Slider onValueChange={handleSliderChange} min={1} max={100} className="bg-red-600 rounded-2xl" />
        </div>
    );
}

export default PriceComponent
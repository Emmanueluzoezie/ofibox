"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../../ui/slider';
import { setRankInput } from '@/slice/CardSlice';

const RankSlider = () => {
    const sliderItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"];
    const dispatch = useDispatch()

    const handleSliderChange = (newValue: number[]) => {
        const sectionIndex = Math.floor(newValue[0] / (100 / sliderItems.length));
        dispatch(setRankInput(sliderItems[sectionIndex]));
    };

    return (
        <div className=" slider flex justify-center w-11/12 mx-auto">
            <Slider onValueChange={handleSliderChange} min={1} max={100} className="bg-red-600 rounded-2xl" />
        </div>
    );
};

export default RankSlider;
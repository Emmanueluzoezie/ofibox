"use client"

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";


interface IstateContext {
    currentNftScreen: string
    setCurrentNftScreen: Dispatch<SetStateAction<string>>
}

const initialState = {
    currentNftScreen: "",
    setCurrentNftScreen: () => "",
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const AppContextProvider: React.FC<Childern> = ({ children }) => {
    const [currentNftScreen, setCurrentNftScreen] = useState<string>("product")

    return (
        <StateContext.Provider value={{ currentNftScreen, setCurrentNftScreen,}}>
            {children}
        </StateContext.Provider>
    )
}
export const useContextState = () => useContext(StateContext)
"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface IstateContext {
    currentNftScreen: string
    setCurrentNftScreen: Dispatch<SetStateAction<string>>
    cardDetails: Card
    setCardDetails: Dispatch<SetStateAction<Card>>
}

const initialState = {
    currentNftScreen: "",
    setCurrentNftScreen: () => "",
    cardDetails: {
        title: ""
    },
    setCardDetails: () => {},
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const AppContextProvider: React.FC<Childern> = ({ children }) => {
    const [currentNftScreen, setCurrentNftScreen] = useState<string>("product")
    const [cardDetails, setCardDetails] = useState<Card>({
        title: ""
    })

    return (
        <StateContext.Provider value={{ currentNftScreen, setCurrentNftScreen, cardDetails, setCardDetails }}>
            {children}
        </StateContext.Provider>
    )
}
export const useContextState = () => useContext(StateContext)
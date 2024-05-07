import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface AppState {
    showCardCreation: boolean;
    loadingState: Loader
    showLoginButton: boolean;
    showLoginScreen: boolean;
    currentAssetScreen: string
    showWhitePaper: boolean
}

const initialState: AppState = {
    showCardCreation: false,
    loadingState: {
        state: false,
        type: ""
    }, 
    showLoginButton: false,
    showLoginScreen: false,
    currentAssetScreen: "all_asset",
    showWhitePaper: false
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setShowCardCreation: (state, action: PayloadAction<boolean>) => {
            state.showCardCreation = action.payload;
        },
        setLoadingState: (state, action: PayloadAction<Loader>) => {
            state.loadingState = action.payload;
        },
        setShowLoginScreen: (state, action: PayloadAction<boolean>) => {
            state.showLoginScreen = action.payload;
        },
        setShowLoginButton: (state, action: PayloadAction<boolean>) => {
            state.showLoginButton = action.payload;
        },
        setCurrentAssetScreen: (state, action: PayloadAction<string>) => {
            state.currentAssetScreen = action.payload
        },
        setShowWhitePaper: (state, action: PayloadAction<boolean>) => {
            state.showWhitePaper = action.payload;
        },
    }
});

export const { setShowCardCreation, setLoadingState, setShowLoginScreen, setShowLoginButton, setCurrentAssetScreen, setShowWhitePaper } = appSlice.actions;

export const selectShowCardCreation = (state: RootState) => state.app.showCardCreation
export const selectLoadingState = (state: RootState) => state.app.loadingState
export const selectShowLoginScreen = (state: RootState) => state.app.showLoginScreen;
export const selectShowLoginButton = (state: RootState) => state.app.showLoginButton;
export const selectCurrentAssetScreen = (state: RootState) => state.app.currentAssetScreen;
export const selectShowWhitePaper = (state: RootState) => state.app.showWhitePaper;


export default appSlice.reducer;
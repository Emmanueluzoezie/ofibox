import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface AppState {
    showCardCreation: boolean;
    loadingState: Loader
    showLoginButton: boolean;
    showLoginScreen: boolean;
    currentAssetScreen: string
}

const initialState: AppState = {
    showCardCreation: false,
    loadingState: {
        state: false,
        type: ""
    }, 
    showLoginButton: false,
    showLoginScreen: false,
    currentAssetScreen: "all_asset"
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
        }
    }
});

export const { setShowCardCreation, setLoadingState, setShowLoginScreen, setShowLoginButton, setCurrentAssetScreen } = appSlice.actions;

export const selectShowCardCreation = (state: RootState) => state.app.showCardCreation
export const selectLoadingState = (state: RootState) => state.app.loadingState
export const selectShowLoginScreen = (state: RootState) => state.app.showLoginScreen;
export const selectShowLoginButton = (state: RootState) => state.app.showLoginButton;
export const selectCurrentAssetScreen = (state: RootState) => state.app.currentAssetScreen;


export default appSlice.reducer;
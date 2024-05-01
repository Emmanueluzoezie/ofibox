import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface CardState {
    showImageLoader: boolean;
    titleInput: string;
    priceInput: number;
    tollInput: number;
    imageInput: string;
    cardToImage: string;
    rankInput: string;
    ruleInput: string;
    themeInput: string;
    actionInput: string;
    showPermissionToProceed: boolean;
    currentTemplate: string,
    currentTemplateId: string
    tollCurrency: string
    tollAmount: number
    isCardCreation: boolean
}

const initialState: CardState = {
    showImageLoader: false,
    titleInput: "",
    priceInput: 0,
    tollInput: 0,
    imageInput: "",
    cardToImage: "",
    rankInput: "0",
    ruleInput: "",
    themeInput: "",
    actionInput: "pay",
    showPermissionToProceed: false,
    currentTemplate: "default",
    currentTemplateId: "default_template_id",
    tollCurrency: "",
    tollAmount: 0,
    isCardCreation: false
}

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setShowImageLoader: (state, action: PayloadAction<boolean>) => {
            state.showImageLoader = action.payload;
        },
        setTitleInput: (state, action: PayloadAction<string>) => {
            state.titleInput = action.payload;
        },
        setPriceInput: (state, action: PayloadAction<number>) => {
            state.priceInput = action.payload;
        },
        setTollInput: (state, action: PayloadAction<number>) => {
            state.tollInput = action.payload;
        },
        setImageInput: (state, action: PayloadAction<string>) => {
            state.imageInput = action.payload;
        },
        setCardToImage: (state, action: PayloadAction<string>) => {
            state.cardToImage = action.payload;
        },
        setRankInput: (state, action: PayloadAction<string>) => {
            state.rankInput = action.payload;
        },
        setRuleInput: (state, action: PayloadAction<string>) => {
            state.ruleInput = action.payload;
        },
        setThemeInput: (state, action: PayloadAction<string>) => {
            state.themeInput = action.payload;
        },
        setActionInput: (state, action: PayloadAction<string>) => {
            state.actionInput = action.payload;
        },
        setShowPermissionToProceed: (state, action: PayloadAction<boolean>) => {
            state.showPermissionToProceed = action.payload;
        },
        setCurrentTemplateId: (state, action: PayloadAction<string>) => {
            state.currentTemplateId = action.payload;
        },
        setCurrentTempalte: (state, action: PayloadAction<string>) => {
            state.currentTemplate = action.payload;
        },
        setTollCurrency: (state, action: PayloadAction<string>) => {
            state.tollCurrency = action.payload;
        },
        setTollAmount: (state, action: PayloadAction<number>) => {
            state.tollAmount = action.payload;
        },
        setIsCardCreation: (state, action: PayloadAction<boolean>) => {
            state.isCardCreation = action.payload;
        },
    }
});

export const { setShowImageLoader, setTitleInput, setPriceInput, setTollInput, setImageInput, setCardToImage, setRankInput, setRuleInput, setThemeInput, setActionInput, setShowPermissionToProceed, setCurrentTemplateId, setCurrentTempalte, setTollCurrency, setTollAmount, setIsCardCreation } = cardSlice.actions;

export const selectShowImageLoader = (state: RootState) => state.card.showImageLoader;
export const selectTitleInput = (state: RootState) => state.card.titleInput;
export const selectImageInput = (state: RootState) => state.card.imageInput
export const selectCardToImage = (state: RootState) => state.card.cardToImage
export const selectPriceInput = (state: RootState) => state.card.priceInput
export const selectRankInput = (state: RootState) => state.card.rankInput;
export const selectRuleInput = (state: RootState) => state.card.ruleInput
export const selectThemeInput = (state: RootState) => state.card.themeInput
export const selectActionInput = (state: RootState) => state.card.actionInput
export const selectTollInput = (state: RootState) => state.card.tollInput
export const selectShowPermissionToProceed = (state: RootState) => state.card.showPermissionToProceed
export const selectCurrentTemplate = (state: RootState) => state.card.currentTemplate
export const selectCurrentTemplateId = (state: RootState) => state.card.currentTemplateId
export const selectTollCurrency = (state: RootState) => state.card.tollCurrency
export const selectTollAmount = (state: RootState) => state.card.tollAmount
export const selectIsCardCreation = (state: RootState) => state.card.isCardCreation

export default cardSlice.reducer;
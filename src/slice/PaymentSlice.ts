import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface paymentState {
    validatedTransaction: boolean;
    showPaymentModal: boolean;
    isPaymentCompleted: boolean;
}

const initialState: paymentState = {
    validatedTransaction: false,
    showPaymentModal: false,
    isPaymentCompleted: false
}

export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        setShowPaymentModal: (state, action: PayloadAction<boolean>) => {
            state.showPaymentModal = action.payload;
        },
        setIsPaymentCompleted: (state, action: PayloadAction<boolean>) => {
            state.isPaymentCompleted = action.payload;
        },
        setValidatedTransaction: (state, action: PayloadAction<boolean>) => {
            state.validatedTransaction = action.payload;
        },
    }
});

export const { setShowPaymentModal, setIsPaymentCompleted, setValidatedTransaction } = paymentSlice.actions;

export const selectIsPaymentCompleted = (state: RootState) => state.payment.isPaymentCompleted;
export const selectShowPaymentModal = (state: RootState) => state.payment.showPaymentModal;
export const selectValidatedTransaction = (state: RootState) => state.payment.validatedTransaction;

export default paymentSlice.reducer;
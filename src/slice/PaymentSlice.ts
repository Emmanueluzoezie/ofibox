import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface paymentState {
    validatedTransaction: boolean;
    showPaymentModal: boolean;
    isPaymentCompleted: boolean;
    amountToBeDebited: paymentList
}

const initialState: paymentState = {
    validatedTransaction: false,
    showPaymentModal: false,
    isPaymentCompleted: false,
    amountToBeDebited: {
        creation: 0,
        template: 0,
        total: 0

    }
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
        setAmountToBeDebited: (state, action: PayloadAction<paymentList>) => {
            state.amountToBeDebited = action.payload;
        },
    }
});

export const { setShowPaymentModal, setIsPaymentCompleted, setValidatedTransaction, setAmountToBeDebited } = paymentSlice.actions;

export const selectIsPaymentCompleted = (state: RootState) => state.payment.isPaymentCompleted;
export const selectShowPaymentModal = (state: RootState) => state.payment.showPaymentModal;
export const selectValidatedTransaction = (state: RootState) => state.payment.validatedTransaction;
export const selectAmountToBeDebited = (state: RootState) => state.payment.amountToBeDebited

export default paymentSlice.reducer;
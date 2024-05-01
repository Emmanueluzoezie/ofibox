import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface UserState {
    // userWalletAddress: string;
    userId: string;
    amountToBeDebited: number
}

const initialState: UserState = {
    // userWalletAddress: "",
    userId: "",
    amountToBeDebited: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
        // setUserWalletAddress: (state, action: PayloadAction<string>) => {
        //     state.userWalletAddress = action.payload;
        // },
        setAmountToBeDebited: (state, action: PayloadAction<number>) => {
            state.amountToBeDebited = action.payload;
        },
    }
});

export const { setUserId, setAmountToBeDebited} = userSlice.actions;

export const selectUserId = (state: RootState) => state.user.userId;
export const selectAmountToBeDebited = (state: RootState) => state.user.amountToBeDebited
// export const selectUserWalletAddress = (state: RootState) => state.user.userWalletAddress

export default userSlice.reducer;
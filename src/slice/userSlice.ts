import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface UserState {
    // userWalletAddress: string;
    userId: string;
}

const initialState: UserState = {
    // userWalletAddress: "",
    userId: "",
    
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
    }
});

export const { setUserId } = userSlice.actions;

export const selectUserId = (state: RootState) => state.user.userId;
// export const selectUserWalletAddress = (state: RootState) => state.user.userWalletAddress

export default userSlice.reducer;
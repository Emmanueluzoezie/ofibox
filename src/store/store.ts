import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appSlice } from '../slice/AppSlice';
import { userSlice } from '@/slice/userSlice';
import { cardSlice } from '@/slice/CardSlice';
import { paymentSlice } from '@/slice/PaymentSlice';

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        user: userSlice.reducer,
        card: cardSlice.reducer,
        payment: paymentSlice.reducer
    },
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
})

export default store;

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduders/user-reducer";

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

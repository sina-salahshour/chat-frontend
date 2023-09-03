import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reduders/chat-reducer";
import userCountReducer from "./reduders/user-count-reducer";
import userReducer from "./reduders/user-reducer";

export const store = configureStore({
    reducer: combineReducers({
        "user": userReducer,
        "chat": chatReducer,
        "user-count": userCountReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { WsChatMessageDto } from "types/dtos/chat/message.dto";

export const chatAdapter = createEntityAdapter<WsChatMessageDto>({
    selectId: (message) => message.id,
    sortComparer: (a, b) => a.date.localeCompare(b.date),
});

const chatSlice = createSlice({
    name: "chat",
    initialState: chatAdapter.getInitialState(),
    reducers: {
        addMessage: (state, action: PayloadAction<WsChatMessageDto>) => {
            chatAdapter.addOne(state, action.payload);
        },
        addMessages: (state, action: PayloadAction<WsChatMessageDto[]>) => {
            chatAdapter.addMany(state, action.payload);
        },
        clearMessages: (state) => {
            chatAdapter.removeAll(state);
        },
    },
});

export const { addMessage, addMessages, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;

export const chatSelectors = chatAdapter.getSelectors<RootState>(
    (state) => state.chat
);


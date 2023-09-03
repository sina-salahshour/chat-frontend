import { createSlice } from "@reduxjs/toolkit";
import type { MeDto } from "types/dtos/user/me.dto";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserCountState {
    count?: number;
};

const initialState: UserCountState = {};

const userCountSlice = createSlice({
    name: "user-count",
    initialState,
    reducers: {
        setUserCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
    },
});

export const { setUserCount } = userCountSlice.actions;
export default userCountSlice.reducer;

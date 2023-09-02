import { createSlice } from "@reduxjs/toolkit";
import type { MeDto } from "types/dtos/user/me.dto";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    user?: MeDto;
};

const initialState: UserState = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<MeDto>) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

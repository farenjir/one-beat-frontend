import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { IUser } from "@/types";

const initialState: { user?: IUser } = {
	user: undefined,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
	},
});

export const { updateUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;

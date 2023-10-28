import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/types";

const initialState: { user: IUser | null } = {
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
	},
});

export const { updateUser } = authSlice.actions;

export default authSlice.reducer;

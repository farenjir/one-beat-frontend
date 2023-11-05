import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "@/types";

import { getCurrentUser } from "./action";

export interface IAuthState {
	user: IUser | null;
	loading: boolean;
}

const initialState: IAuthState = {
	user: null,
	loading: true,
};

const authSlice = createSlice<IAuthState, {}, "auth">({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCurrentUser.pending, (state) => {
				state.user = state.user;
				state.loading = true;
			})
			.addCase(getCurrentUser.rejected, (state) => {
				state.user = null;
				state.loading = false;
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.loading = false;
			});
	},
});

export default authSlice.reducer;

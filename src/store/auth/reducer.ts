import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "@/types";

import { getCurrentUser } from "./action";

export interface IAuthState {
	user: IUser | null;
	loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: IAuthState = {
	user: null,
	loading: "idle",
};

const authSlice = createSlice<IAuthState, {}, "auth">({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCurrentUser.pending, (state) => {
				state.user = state.user;
				state.loading = "pending";
			})
			.addCase(getCurrentUser.rejected, (state) => {
				state.user = null;
				state.loading = "failed";
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.loading = "succeeded";
			});
	},
});

export default authSlice.reducer;
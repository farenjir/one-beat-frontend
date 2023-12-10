import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "@/types";

import { clearCurrentUser, getCurrentUser } from "./action";

export interface IAuthState {
	user: IUser | null;
	loading: boolean;
}

const initialState: IAuthState = {
	user: null,
	loading: true,
};

const authSlice = createSlice<IAuthState, {}, "auth", {}>({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// getCurrentUser
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
			})
			// clearCurrentUser
			.addCase(clearCurrentUser.rejected, (state) => {
				state.user = null;
				state.loading = false;
			})
			.addCase(clearCurrentUser.fulfilled, (state, action) => {
				state.user = null;
				state.loading = false;
			});
	},
});

export const { reducer: authReducer, actions: authActions } = authSlice;

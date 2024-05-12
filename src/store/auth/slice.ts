import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "@/types";
import { ACCESS_TOKEN_ID } from "@/types/constance";

import { clearCurrentUser, getCurrentUser } from "./action";
import { getFromCookie } from "@/utils/storage";

export interface IAuthState {
	user: IUser | null;
	loading: boolean;
}

const initialState: IAuthState = {
	user: null,
	loading: !!getFromCookie(ACCESS_TOKEN_ID),
};

const authSlice = createSlice<IAuthState, {}, "auth", {}>({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// getCurrentUser
			.addCase(getCurrentUser.pending, (state) => {
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

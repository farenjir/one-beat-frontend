import { Slice, SliceCaseReducers, createSelector, createSlice } from "@reduxjs/toolkit";

import { IUser } from "@/types";
import { RootState } from "../store";

import { clearCurrentUser, getCurrentUser } from "./action";

export interface IAuthState {
	user: IUser | null;
	loading: boolean;
}
interface IAuthSelectors {
	auth: (state: IAuthState) => IAuthState;
	user: (state: IAuthState) => IUser | null;
}

const initialState: IAuthState = {
	user: null,
	loading: true,
};

const authSlice: Slice<IAuthState, SliceCaseReducers<IAuthState>, "auth"> = createSlice<
	IAuthState,
	{},
	"auth",
	IAuthSelectors,
	"auth"
>({
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
	selectors: {
		auth: (state: RootState) => state.auth,
		user: createSelector(
			(state: RootState) => state.auth,
			(auth) => auth.user,
		),
	},
});

export const authSelectors = authSlice.selectors;

export const { reducer: authReducer, actions: authActions } = authSlice;

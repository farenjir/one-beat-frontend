import { createSlice } from "@reduxjs/toolkit";

import { AppTransformBases } from "@/types";

import { initializeAppDep } from "./action";

export interface IAppState {
	baseVersion: number;
	appVersion: number;
	description: string[];
	bases: Record<string, AppTransformBases>;
	loading: boolean;
}

const initialState: IAppState = {
	appVersion: 0,
	baseVersion: 0,
	description: [],
	bases: {},
	loading: true,
};

const appSlice = createSlice<IAppState, {}, "app", {}>({
	name: "app",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(initializeAppDep.pending, (state) => {
				state.loading = true;
			})
			.addCase(initializeAppDep.rejected, (state) => {
				state.loading = false;
			})
			.addCase(initializeAppDep.fulfilled, (state, action) => {
				Object.assign(state, { ...action.payload, loading: false });
			});
	},
});

export const { reducer: appReducer, actions: appActions } = appSlice;

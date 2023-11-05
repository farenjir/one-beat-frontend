import { createSlice } from "@reduxjs/toolkit";

import { AppBases } from "@/types";

import { initializeAppDep } from "./action";

export interface IAppState {
	baseVersion: number;
	appVersion: number;
	description: string[];
	bases: AppBases[];
	loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: IAppState = {
	appVersion: 0,
	baseVersion: 0,
	description: [],
	bases: [],
	loading: "idle",
};

const appSlice = createSlice<IAppState, {}, "app">({
	name: "app",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(initializeAppDep.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(initializeAppDep.rejected, (state) => {
				state.loading = "failed";
			})
			.addCase(initializeAppDep.fulfilled, (state, action) => {
				const { appVersion, baseVersion, bases, description } = action.payload;
				Object.assign(state, { appVersion, baseVersion, bases, description, loading: "succeeded" });
			});
	},
});

export default appSlice.reducer;

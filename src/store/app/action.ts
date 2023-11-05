import { createAsyncThunk } from "@reduxjs/toolkit";

import { TypeApi } from "@/service";
import { IVersion } from "@/types";

import { HandlesAppDepends } from "./utils";

const { getCurrentAppDep, updateAppBases } = new HandlesAppDepends();

export const initializeAppDep = createAsyncThunk("app/initialize", async ({ callApi }: TypeApi, _thunkAPI) => {
	const { currentAppVersion, currentBaseVersion, currentBases } = await getCurrentAppDep();
	return await callApi<IVersion>({ url: "version/getLatest" })
		.then(async (response) => {
			const { appVersion, baseVersion, description } = response;
			const bases = await updateAppBases({ callApi }, baseVersion, currentBaseVersion, appVersion);
			return {
				bases,
				appVersion,
				baseVersion,
				description,
			};
		})
		.catch((_error) => {
			return {
				bases: currentBases,
				appVersion: currentAppVersion,
				baseVersion: currentBaseVersion,
				description: [],
			};
		});
});

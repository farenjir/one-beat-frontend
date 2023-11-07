import { createAsyncThunk } from "@reduxjs/toolkit";

import { TypeApi } from "@/service";
import { AppBases, ILocale, IVersion } from "@/types";

import { getFromStorage, setToStorage } from "@/utils/storage";
import { storeInCookie } from "@/utils/cookie";

type IProps = {
	locale: ILocale;
};

export const initializeAppDep = createAsyncThunk("app/initialize", async ({ callApi, locale }: TypeApi & IProps, _thunkAPI) => {
	const { currentAppVersion, currentBaseVersion, currentBases } = initializeHandles.currentAppDep(locale);
	// return
	return await callApi<IVersion>({ url: "version/getLatest" })
		.then(async (response) => {
			const { appVersion, baseVersion, description } = response || {};
			const bases = await initializeHandles.updateAppDep(
				{ callApi },
				appVersion,
				currentAppVersion,
				baseVersion,
				currentBaseVersion,
				currentBases,
			);
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

export const initializeHandles = {
	currentAppDep: (locale: ILocale) => {
		storeInCookie("locale", locale);
		return {
			currentAppVersion: +(getFromStorage("appVersion") || 0),
			currentBaseVersion: +(getFromStorage("baseVersion") || 0),
			currentBases: getFromStorage("appBases") || [],
		};
	},
	updateAppDep: async (
		{ callApi }: TypeApi,
		appVersion: number,
		currentAppVersion: number,
		baseVersion: number,
		currentBaseVersion: number,
		currentBases: AppBases[],
	): Promise<AppBases[]> => {
		// get bases
		let bases = currentBases;
		if (baseVersion !== currentBaseVersion) {
			bases = await callApi<AppBases[]>({ url: "base/getAll" })
				.then((response) => {
					response && setToStorage("baseVersion", baseVersion);
					return response;
				})
				.catch((_error) => currentBases);
			// setToStorage
			setToStorage("appBases", bases);
		}
		if (appVersion !== currentAppVersion) {
			setToStorage("appVersion", appVersion);
		}
		// return
		return bases;
	},
};

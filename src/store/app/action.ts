import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppBases, ILocale, IVersion, TypeApi } from "@/types";

import { storeInCookie } from "@/utils/cookie";
import { getFromStorage, setToStorage } from "@/utils/storage";

type IProps = {
	locale: ILocale;
	callApi: TypeApi;
};

export const initializeAppDep = createAsyncThunk("app/initialize", async ({ callApi, locale }: IProps, _thunkAPI) => {
	const { currentAppVersion, currentBaseVersion, currentBases } = initializeHandles.currentAppDep(locale);
	// return
	return await callApi<IVersion, null>({ url: "version/getLatest" })
		.then(async (response) => {
			const { appVersion = currentAppVersion, baseVersion = currentBaseVersion, description = [] } = response || {};
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
		{ callApi }: Omit<IProps, "locale">,
		appVersion: number,
		currentAppVersion: number,
		baseVersion: number,
		currentBaseVersion: number,
		currentBases: AppBases[],
	): Promise<AppBases[]> => {
		// get bases
		let bases = currentBases;
		if (baseVersion !== currentBaseVersion) {
			bases = await callApi<AppBases[], null>({ url: "base/getAll" })
				.then((response) => {
					if (response) {
						// setToStorage
						setToStorage("baseVersion", baseVersion);
						setToStorage("appBases", response);
						return response;
					} else {
						return currentBases;
					}
				})
				.catch((_error) => currentBases);
		}
		if (appVersion !== currentAppVersion) {
			if (appVersion) {
				setToStorage("appVersion", appVersion);
			}
		}
		// return
		return bases;
	},
};

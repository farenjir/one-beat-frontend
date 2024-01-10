import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppBases, AppTransformBases, ILocale, IVersion, TypeApi } from "@/types";

import { getFromCookie, storeInCookie } from "@/utils/cookie";
import { getFromStorage, setToStorage } from "@/utils/storage";

type IProps = {
	locale: ILocale;
	callApi: TypeApi;
};

type Bases = Record<string, AppTransformBases>;

export const initializeAppDep = createAsyncThunk("app/initialize", async ({ callApi, locale }: IProps, _thunkAPI) => {
	const { currentAppVersion, currentBaseVersion, currentBases, localeChanged } = initializeHandles.currentAppDep(locale);
	// return
	return await callApi<IVersion>({ url: "version/latest" })
		.then(async (response) => {
			const { appVersion = currentAppVersion, baseVersion = currentBaseVersion, description = [] } = response || {};
			const bases = await initializeHandles.updateAppDep(
				{ callApi, locale },
				appVersion,
				currentAppVersion,
				baseVersion,
				currentBaseVersion,
				currentBases,
				localeChanged,
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
		const currentLocale = getFromCookie("locale");
		if (currentLocale !== locale) {
			storeInCookie("locale", locale);
		}
		return {
			localeChanged: currentLocale !== locale,
			currentAppVersion: +(getFromStorage("appVersion") || 0),
			currentBaseVersion: +(getFromStorage("baseVersion") || 0),
			currentBases: getFromStorage("appBases") || [],
		};
	},
	updateAppDep: async (
		{ callApi, locale }: IProps,
		appVersion: number,
		currentAppVersion: number,
		baseVersion: number,
		currentBaseVersion: number,
		currentBases: Bases,
		localeChanged: boolean,
	): Promise<Bases> => {
		// get bases
		let bases = currentBases;
		if (baseVersion !== currentBaseVersion || localeChanged) {
			bases = await callApi<AppBases[]>({ url: "base/all" })
				.then((response) => {
					if (response) {
						const appBases = initializeHandles.baseTransformer(response, locale);
						// setToStorage
						setToStorage("baseVersion", baseVersion);
						setToStorage("appBases", appBases);
						return appBases;
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
	baseTransformer: (bases: AppBases[], locale: ILocale): Bases => {
		const basesObject: Bases = {};
		bases.forEach(({ id: pId, type = "", children = [], ...name }) => {
			basesObject[type] = {
				type,
				id: pId,
				key: pId,
				value: pId,
				label: name[`${locale}Name`],
				name: name[`${locale}Name`],
				children: children.map(({ id = 0, type = "", ...name }) => ({
					id,
					type,
					value: id,
					key: id,
					label: name[`${locale}Name`],
					name: name[`${locale}Name`],
				})),
			};
			const baseChild: any = {};
			children?.forEach(({ id = 0, type = "", ...name }) => {
				baseChild[id] = {
					id,
					type,
					value: id,
					key: id,
					label: name[`${locale}Name`],
					name: name[`${locale}Name`],
				};
			});
			basesObject[`${type}Children`] = baseChild;
		});
		// return
		return basesObject;
	},
};

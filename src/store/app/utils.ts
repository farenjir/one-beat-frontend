import { TypeApi } from "@/service";
import { AppBases } from "@/types";

import { getFromStorage, setToStorage } from "@/utils/storage";

export class HandlesAppDepends {
	getCurrentAppDep = async () => {
		const currentAppVersion = +(getFromStorage("appVersion") || 0);
		const currentBaseVersion = +(getFromStorage("baseVersion") || 0);
		const currentBases = (await getFromStorage("appBases")) || [];
		return { currentAppVersion, currentBaseVersion, currentBases };
	};
	updateAppBases = async (
		{ callApi }: TypeApi,
		appVersion: number,
		baseVersion: number,
		currentBaseVersion: number,
		currentBases: AppBases[],
	): Promise<AppBases[]> => {
		setToStorage("appVersion", appVersion);
		setToStorage("baseVersion", baseVersion);
		// get bases
		let bases = currentBases;
		if (baseVersion !== currentBaseVersion) {
			bases = await callApi<AppBases[]>({ url: "base/getAll" })
				.then((response) => response)
				.catch((e) => bases);
			// setToStorage
			setToStorage("appBases", bases);
		}
		// return
		return bases;
	};
}

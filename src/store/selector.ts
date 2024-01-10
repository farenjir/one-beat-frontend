import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "./store";

// *** usage redux store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

// *** app selector handles

export const authSelector = (state: RootState) => state.auth;
export const userSelector = (state: RootState) => state.auth.user;

export const versionSelector = ({ app: { description, appVersion } }: RootState) => ({ appVersion, description });
export const basesSelector = (state: RootState) => state.app.bases || [];
export const basesSelectorByType = (state: RootState, baseType: string[]) => {
	const bases: any = {};
	baseType.forEach((type) => {
		bases[type] = state.app.bases[type] || {};
		bases[`${type}Children`] = state.app.bases[`${type}Children`] || {};
	});
	return bases;
};

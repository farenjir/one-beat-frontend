import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import store from "./store";

// *** infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// *** usage redux store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// *** app selector handles

export const versionSelector = ({ app: { description, appVersion } }: RootState) => ({ appVersion, description });
export const basesSelector = (state: RootState) => state.app.bases || [];
export const basesSelectorByType = (state: RootState, baseType: string) => {
	return state?.app?.bases?.find((base) => base?.type === baseType);
};

export const authSelector = (state: RootState) => state.auth;
export const userSelector = (state: RootState) => state.auth.user;

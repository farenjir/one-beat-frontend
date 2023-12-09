import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// *** usage redux store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// *** app selector handles

export const versionSelector = ({ app: { description, appVersion } }: RootState) => ({ appVersion, description });
export const basesSelector = (state: RootState) => state.app.bases || [];
export const basesSelectorByType = (state: RootState, baseType: string) => {
	return state?.app?.bases?.find((base: { type: string }) => base?.type === baseType);
};

export const authSelector = (state: RootState) => state.auth;
export const userSelector = (state: RootState) => state.auth.user;

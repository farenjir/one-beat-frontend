import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// app selector handles
export const selectUser = (state: RootState) => state.auth.user;

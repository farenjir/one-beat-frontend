import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";

const reducer = {
	// commons
	auth: authReducer,
	// user reducers
	// admin reducers
	// producer reducers
};

const middleware = [];
if (process.env.NODE_ENV !== "production") {
	const { logger } = require("redux-logger");
	middleware.push(logger);
}

// *** initialize redux store
export const store = configureStore({ reducer, middleware });

// *** infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// *** usage redux store
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

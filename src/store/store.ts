import { useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/reducer";

const middleware = [];
if (process.env.NODE_ENV !== "production") {
	const { logger } = require("redux-logger");
	middleware.push(logger);
}

const reducer = combineReducers({
	// commons
	auth: authReducer,
	// user reducers
	// admin reducers
	// producer reducers
});

// *** initialize redux store
export const store = configureStore({ reducer, middleware });

export default store;

// *** infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// *** usage redux store
export const useAppDispatch = () => useDispatch<AppDispatch>();

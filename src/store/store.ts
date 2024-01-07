import { configureStore } from "@reduxjs/toolkit";

import { appReducer } from "./app/reducer";
import { authReducer } from "./auth/reducer";

const reducer = {
	app: appReducer,
	auth: authReducer,
	// user reducers
	// admin reducers
	// producer reducers
};

// *** middleware
const additionalMiddleware: any[] = [];
if (process.env.NODE_ENV !== "production") {
	const { logger } = require("redux-logger");
	additionalMiddleware.push(logger);
}

// *** initialize redux store
export const makeStore = () => {
  return configureStore({
		reducer,
		devTools: process.env.NODE_ENV !== "production",
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(additionalMiddleware),
	});
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

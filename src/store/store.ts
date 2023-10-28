import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/reducer";

const additionalMiddleware: any[] = [];
if (process.env.NODE_ENV !== "production") {
	const { logger } = require("redux-logger");
	additionalMiddleware.push(logger);
}

const reducer = {
	// commons
	auth: authReducer,
	// user reducers
	// admin reducers
	// producer reducers
};

// *** initialize redux store
export const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(additionalMiddleware),
});

export default store;

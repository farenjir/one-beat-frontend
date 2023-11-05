import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./app/reducer";
import authReducer from "./auth/reducer";

const additionalMiddleware: any[] = [];
if (process.env.NODE_ENV !== "production") {
	const { logger } = require("redux-logger");
	additionalMiddleware.push(logger);
}

const reducer = {
	app: appReducer,
	auth: authReducer,
	// user reducers
	// admin reducers
	// producer reducers
};

// *** initialize redux store
const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(additionalMiddleware),
});

export default store;

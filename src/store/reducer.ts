import type { Reducer } from "@reduxjs/toolkit";

import type { IAppState } from "./app/slice";
import type { IAuthState } from "./auth/slice";

declare const reducer: Reducer<{
	app: IAppState;
	auth: IAuthState;
}>;

export default reducer;

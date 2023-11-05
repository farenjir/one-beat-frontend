import type { Reducer } from "@reduxjs/toolkit";

import type { IAppState } from "./app/reducer";
import type { IAuthState } from "./auth/reducer";

declare const reducer: Reducer<{
	app: IAppState;
	auth: IAuthState;
}>;

export default reducer;

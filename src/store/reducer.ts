import type { Reducer } from "@reduxjs/toolkit";

import { IAuthState } from "./auth/reducer";

declare const reducer: Reducer<{
	auth: IAuthState;
}>;

export default reducer;

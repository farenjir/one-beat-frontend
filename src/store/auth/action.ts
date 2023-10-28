import { createAsyncThunk } from "@reduxjs/toolkit";

import { TypeApi } from "@/service";
import { IUser } from "@/types";

export const getCurrentUser = createAsyncThunk("auth/currentUser", async ({ callApi }: TypeApi, _thunkAPI) => {
	return await callApi<IUser>({ url: "user/whoAmI" })
		.then((response) => {
			return {
				user: response,
			};
		})
		.catch((_error) => {
			return {
				user: null,
			};
		});
});

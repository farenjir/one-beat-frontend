import { createAsyncThunk } from "@reduxjs/toolkit";

import type callApi from "@/service";
import { IUser } from "@/types";

export const getCurrentUser = createAsyncThunk("user/getCurrentUser", async (callback: typeof callApi) => {
	return await callback<IUser>({ url: "user/whoAmI" })
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

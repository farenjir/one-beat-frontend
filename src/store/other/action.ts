import { createAsyncThunk } from "@reduxjs/toolkit";

import callApi from "@/service";
import { IUser } from "@/types";

interface IAuthentication {
	callApi: typeof callApi;
}

export const getCurrentUser = createAsyncThunk("currentUser", async ({ callApi }: IAuthentication) => {
	return await callApi<IUser>({ url: "user/whoAmI" })
		.then((response) => ({
			user: response,
		}))
		.catch((_error) => ({
			user: null,
		}));
});

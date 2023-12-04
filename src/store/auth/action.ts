import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUser, TypeApi } from "@/types";

export const getCurrentUser = createAsyncThunk("auth/currentUser", async ({ callApi }: { callApi: TypeApi }, _thunkAPI) => {
	return await callApi<IUser>({ url: "user/whoAmI" })
		.then((response) => ({ user: response }))
		.catch((_error) => ({ user: null }));
});

export const clearCurrentUser = createAsyncThunk("auth/clearUser", async ({ callApi }: { callApi: TypeApi }, _thunkAPI) => {
	return await callApi<IUser>({ url: "auth/signOut", method: "POST" })
		.then(() => ({ user: null }))
		.catch((_error) => ({ user: null }));
});

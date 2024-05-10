import { createAsyncThunk } from "@reduxjs/toolkit";

import { storeInCookie, removeFromCookie } from "@/utils/storage";

import { ACCESS_TOKEN_ID } from "@/types/constance";
import { IUser, TypeApi } from "@/types";

export const getCurrentUser = createAsyncThunk("auth/currentUser", async ({ callApi }: { callApi: TypeApi }, _thunkAPI) => {
	return await callApi<IUser>({ url: "user/whoAmI" })
		.then((response) => {
			storeInCookie(ACCESS_TOKEN_ID, response.id);
			return { user: response };
		})
		.catch((_error) => ({ user: null }));
});

export const clearCurrentUser = createAsyncThunk("auth/clearUser", async ({ callApi }: { callApi: TypeApi }, _thunkAPI) => {
	removeFromCookie(ACCESS_TOKEN_ID);
	return await callApi<IUser>({ url: "auth/signOut", method: "POST" })
		.then(() => {
			return { user: null };
		})
		.catch((_error) => ({ user: null }));
});

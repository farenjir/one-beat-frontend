import { createAsyncThunk } from "@reduxjs/toolkit";

import { removeFromCookie } from "@/utils/storage";

import { IUser, TypeApi } from "@/types";
import { ACCESS_TOKEN, ACCESS_TOKEN_ID } from "@/types/constance";

export const getCurrentUser = createAsyncThunk("auth/currentUser", async ({ callApi }: { callApi: TypeApi }, _thunkAPI) => {
	return await callApi<IUser>({ url: "user/whoAmI" })
		.then((user) => ({ user }))
		.catch((_error) => {
			removeFromCookie(ACCESS_TOKEN_ID);
			removeFromCookie(ACCESS_TOKEN);
			return { user: null };
		});
});

export const clearCurrentUser = createAsyncThunk("auth/clearUser", async ({ callApi }: { callApi: TypeApi }, _thunkAPI) => {
	return await callApi<IUser>({ url: "auth/signOut", method: "POST" }).finally(() => {
		removeFromCookie(ACCESS_TOKEN_ID);
		removeFromCookie(ACCESS_TOKEN);
		return { user: null };
	});
});

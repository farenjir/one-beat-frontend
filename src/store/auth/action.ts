import { createAsyncThunk } from "@reduxjs/toolkit";

import callApi from "@/service";
import { IUser } from "@/types";

export const getCurrentUser = createAsyncThunk("auth/currentUser", async () => {
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

// import { createAsyncThunk } from "@reduxjs/toolkit";

// import type callApiType from "@/service";
// import { IUser } from "@/types";

// export const getCurrentUser = createAsyncThunk("auth/currentUser", async ({ callApi }: { callApi: typeof callApiType }) => {
// 	return await callApi<IUser>({ url: "user/whoAmI" })
// 		.then((response) => {
// 			return {
// 				user: response,
// 			};
// 		})
// 		.catch((_error) => {
// 			return {
// 				user: null,
// 			};
// 		});
// });

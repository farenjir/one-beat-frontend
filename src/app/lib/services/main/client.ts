import { storeInCookie } from "@/utils/storage";

import { IUser, TypeApi } from "@/types";
import { ACCESS_TOKEN_ID } from "@/types/constance";

// auth
export const userRegistered = <TBody>(callApi: TypeApi, formValues: TBody) => {
	return callApi<IUser, TBody>({ url: "auth/signUp", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};
export const userAuthentication = <TBody>(callApi: TypeApi, formValues: TBody) => {
	return callApi<IUser, TBody>({ url: "auth/signIn", method: "POST", body: formValues })
		.then((user) => {
			storeInCookie(ACCESS_TOKEN_ID, user.id, 24 * 24 * 3600);
			return user;
		})
		.catch((_error) => null);
};
export const userForgatPassword = <TBody>(callApi: TypeApi, formValues: TBody) => {
	return callApi<IUser, TBody>({ url: "auth/forget/password", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};

"use server";

import callApi from "@/service";

import { IUser } from "@/types";

// auth
export const userRegistered = <TBody>(formValues: TBody) => {
	return callApi<IUser, TBody>({ url: "auth/signUp", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};
export const userAuthentication = <TBody>(formValues: TBody) => {
	return callApi<IUser, TBody>({ url: "auth/signIn", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};
export const userForgatPassword = <TBody>(formValues: TBody) => {
	return callApi<IUser, TBody>({ url: "auth/forget/password", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};

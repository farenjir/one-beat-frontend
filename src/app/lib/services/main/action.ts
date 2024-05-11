"use server";

import { cookies } from "next/headers";

import callApi from "@/service";

import { IUser } from "@/types";
import { ACCESS_TOKEN } from "@/types/constance";

// auth
export const userRegistered = <TBody>(formValues: TBody): Promise<IUser | null> => {
	return callApi<IUser, TBody>({ url: "auth/signUp", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};
export const userAuthentication = <TBody>(formValues: TBody): Promise<IUser | null> => {
	return callApi<IUser, TBody>({ url: "auth/signIn", method: "POST", body: formValues })
		.then(({ token, ...user }) => {
			cookies().set({
				name: ACCESS_TOKEN,
				value: token || "",
				httpOnly: true,
				path: "/",
			});
			return user;
		})
		.catch((_error) => null);
};
export const userForgatPassword = <TBody>(formValues: TBody): Promise<IUser | null> => {
	return callApi<IUser, TBody>({ url: "auth/forget/password", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};

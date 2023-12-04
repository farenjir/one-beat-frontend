import { IUser, TypeApi } from "@/types";

// auth
export const userRegistered = async <TBody>(callApi: TypeApi, formValues: TBody) => {
	return await callApi<IUser, TBody>({ url: "auth/signUp", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};
export const userAuthentication = async <TBody>(callApi: TypeApi, formValues: TBody) => {
	return await callApi<IUser, TBody>({ url: "auth/signIn", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};
export const userForgatPassword = async <TBody>(callApi: TypeApi, formValues: TBody) => {
	return await callApi<IUser, TBody>({ url: "auth/forget/password", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};
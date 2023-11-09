import { IUser, TypeApi } from "@/types";

export const userAuthentication = async <TBody>(callApi: TypeApi, formValues: TBody) => {
	return await callApi<IUser, TBody>({ url: "auth/signIn", method: "POST", body: formValues })
		.then((response) => response)
		.catch((_error) => null);
};

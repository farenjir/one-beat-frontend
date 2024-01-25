import { cache } from "react";

import callApiServerSide from "@/service/server";

import { IUser } from "@/types";

export const currentUser = cache(async (): Promise<IUser | null> => {
	return await callApiServerSide<IUser>({ url: "user/whoAmI" })
		.then((response) => response)
		.catch((_error) => null);
});

export const logoutUser = async () => {
	return await callApiServerSide<IUser>({ url: "auth/signOut", method: "POST" })
		.then((response) => response)
		.catch((_error) => null);
};

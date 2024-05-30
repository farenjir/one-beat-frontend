"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { GlobalProps } from "@/types";

import { useAppContext } from "@/app/lib/context";
import { useAppDispatch } from "@/store/selector";
import { getCurrentUser } from "@/store/auth/action";

import { userAuthentication } from "@/app/lib/services/main/client";
import { Forms } from "@/components";

interface ILoginForm {
	username?: string;
	email?: string;
	password: string;
}

const LoginForm = ({ children, mode }: Pick<GlobalProps, "children"> & { mode: "email" | "username" }) => {
	// hooks
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { callApi } = useAppContext();
	// handles
	const onFinish = useCallback(
		async (values: any) => {
			const formBody = {
				[mode]: values[mode],
				password: values.password,
			};
			const loginUser = await userAuthentication<ILoginForm>(callApi, formBody);
			if (loginUser?.id) {
				dispatch(getCurrentUser({ callApi }));
				router.replace("/");
			}
		},
		[mode],
	);
	// return
	return (
		<Forms
			name="login-form"
			onFinish={onFinish}
			initialValues={{ remember: true }}
			classes="!px-5 mx-auto w-96 md:w-[350px]"
		>
			{children}
		</Forms>
	);
};

export default LoginForm;

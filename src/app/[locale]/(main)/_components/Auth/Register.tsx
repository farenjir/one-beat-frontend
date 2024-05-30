"use client";

import { useRouter } from "next/navigation";

import { GlobalProps } from "@/types";
import { createNotification } from "@/utils/notification";
import { useAppContext } from "@/app/lib/context";

import { Forms } from "@/components";

import { userRegistered } from "@/app/lib/services/main/client";

interface IRegisterForm {
	username: string;
	email: string;
	password: string;
	repeatPassword?: string;
}

const RegisterForm = ({ children, dict: { Auth } }: Pick<GlobalProps, "children" | "dict">) => {
	// hooks
	const router = useRouter();
	const { callApi } = useAppContext();
	// handles
	const onFinish = async ({ username, email, password, repeatPassword }: IRegisterForm) => {
		if (password !== repeatPassword) {
			createNotification({ message: Auth.password, type: "warning", description: Auth.passwordDuplicated });
		} else {
			const registerUser = await userRegistered<IRegisterForm>(callApi, { username, email, password });
			if (registerUser?.id) {
				router.push("/");
			}
		}
	};
	// return
	return (
		<Forms name="register-form" onFinish={onFinish} classes="!px-5 mx-auto w-96 md:w-[350px]">
			{children}
		</Forms>
	);
};

export default RegisterForm;

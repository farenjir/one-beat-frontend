"use client";

import { ReactNode, createContext, useContext, useEffect } from "react";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import { useAppDispatch } from "@/store/selectors";
import { getCurrentUser } from "@/store/auth/action";

import callApi from "@/service";
import { ILocale } from "@/langs";

const AppContext = createContext({});

interface IProps {
	children: ReactNode;
	locale: ILocale;
}

const ApplicationContext = ({ children, locale }: IProps) => {
	// hooks
	const dispatch = useAppDispatch();
	// initialize context
	useEffect(() => {
		const promise = dispatch(getCurrentUser({ callApi }));
		return () => {
			promise.abort();
		};
	}, []);
	// return context
	return (
		<AppContext.Provider
			value={{
				locale,
				callApi,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// usage context
export const useAppContext = () => useContext(AppContext);

// state management of the application
export default function ({ children, locale }: IProps) {
	return (
		<Provider store={store}>
			<ApplicationContext locale={locale}>{children}</ApplicationContext>
		</Provider>
	);
}

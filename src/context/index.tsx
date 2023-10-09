"use client";

import { ReactNode, createContext, useContext } from "react";
import { Provider } from "react-redux";

import { store } from "@/store";

import callApi from "@/service";
import { ILocale } from "@/langs";

const AppContext = createContext({});

interface IProps {
	children: ReactNode;
	locale: ILocale;
}

const ApplicationContext = async ({ children, locale }: IProps) => {
	// initialize context
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

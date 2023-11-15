"use client";

import { ReactNode, createContext, useContext, useEffect } from "react";
import { Provider } from "react-redux";

import { getDictionary } from "@/langs";
import { ILocale, ILocaleOptions } from "@/types";

import store from "@/store/store";
import { useAppDispatch } from "@/store/selector";
import { getCurrentUser } from "@/store/auth/action";
import { initializeAppDep } from "@/store/app/action";

import callApi from "@/service";
import { useLocaleConfigs } from "@/hooks";

import StyledComponentsRegistry from "@/components/AntdRegistry";

interface IContext {
	callApi: typeof callApi;
	localeConfigs: {
		dict?: typeof getDictionary.arguments;
		locale?: ILocaleOptions;
	};
}

const AppContext = createContext<IContext>({
	callApi,
	localeConfigs: {},
});

const ApplicationContext = ({ children, locale }: { children: ReactNode; locale: ILocale }) => {
	// hooks
	const localeConfigs = useLocaleConfigs(locale);
	const dispatch = useAppDispatch();
	// initialize context
	useEffect(() => {
		const appPromise = dispatch(initializeAppDep({ callApi, locale }));
		const userPromise = dispatch(getCurrentUser({ callApi }));
		// cleanUp
		return () => {
			appPromise.abort();
			userPromise.abort();
		};
	}, [locale, dispatch]);
	// return context
	return (
		<AppContext.Provider
			value={{
				callApi,
				localeConfigs,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// usage context
export const useAppContext = () => useContext(AppContext);

// state management of the application
export default function ({ children, locale }: { children: ReactNode; locale: ILocale }) {
	return (
		<Provider store={store}>
			<StyledComponentsRegistry>
				<ApplicationContext locale={locale}>{children}</ApplicationContext>
			</StyledComponentsRegistry>
		</Provider>
	);
}

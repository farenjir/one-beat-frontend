"use client";

import { ReactNode, createContext, useContext, useEffect, useRef } from "react";
import { Provider } from "react-redux";

import { getDictionary } from "@/assets/langs";
import { ILocale, ILocaleOptions } from "@/types";
import { ACCESS_TOKEN_ID } from "@/types/constance";
import { getFromCookie } from "@/utils/storage";

import { AppStore, makeStore } from "@/store/store";
import { useAppDispatch } from "@/store/selector";
import { getCurrentUser } from "@/store/auth/action";
import { initializeAppDep } from "@/store/app/action";

import callApi from "@/service";
import { useLocaleConfigs } from "@/app/lib/hooks";

import StyledComponentsRegistry from "@/components/Registry";

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

const checkUser = getFromCookie(ACCESS_TOKEN_ID);

const ApplicationContext = ({ children, locale }: { children: ReactNode; locale: ILocale }) => {
	// hooks
	const localeConfigs = useLocaleConfigs(locale);
	const dispatch = useAppDispatch();
	// initialize context
	useEffect(() => {
		const appPromise = dispatch(initializeAppDep({ callApi, locale }));
		if (checkUser) {
			dispatch(getCurrentUser({ callApi }));
		}
		// cleanUp
		return () => {
			appPromise.abort();
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
export default function Globals({ children, locale }: { children: ReactNode; locale: ILocale }) {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		storeRef.current = makeStore();
	}
	return (
		<Provider store={storeRef.current}>
			<StyledComponentsRegistry>
				<ApplicationContext locale={locale}>{children}</ApplicationContext>
			</StyledComponentsRegistry>
		</Provider>
	);
}
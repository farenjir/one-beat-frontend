"use client";

import { ReactNode, createContext, useContext, useEffect, useRef } from "react";
import { Provider } from "react-redux";

import en from "antd/locale/en_US";
import fa from "antd/locale/fa_IR";
import { ConfigProvider } from "antd";

import { defaultLocale, getDictionary } from "@/assets/langs";
import { ILocale, ILocaleOptions } from "@/types";
import { ACCESS_TOKEN_ID, LOCALE_NAME } from "@/types/constance";
import { getFromCookie } from "@/utils/storage";
import { localeOptions } from "@/utils/global";

import { AppStore, makeStore } from "@/store/store";
import { useAppDispatch } from "@/store/selector";
import { getCurrentUser } from "@/store/auth/action";
import { initializeAppDep } from "@/store/app/action";

import callApi from "@/service";
import { useLocaleConfigs } from "@/app/lib/hooks";

import StyledComponentsRegistry from "@/components/Registry";

interface IContext {
	callApi: typeof callApi;
	dict?: typeof getDictionary.arguments;
	localeConfigs?: ILocaleOptions;
}

const locale: string = getFromCookie(LOCALE_NAME) || defaultLocale;
const locales = (isEn: boolean | undefined) => (isEn ? en : fa);

const AppContext = createContext<IContext>({
	callApi,
	dict: {},
	localeConfigs: localeOptions[locale],
});

const checkUserAuth = getFromCookie(ACCESS_TOKEN_ID);

const ApplicationContext = ({ children, locale }: { children: ReactNode; locale: ILocale }) => {
	// hooks
	const { dict, localeConfigs } = useLocaleConfigs(locale);
	const dispatch = useAppDispatch();
	// initialize context
	useEffect(() => {
		const appPromise = dispatch(initializeAppDep({ callApi, locale }));
		if (checkUserAuth) {
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
				dict,
				localeConfigs,
			}}
		>
			<ConfigProvider direction={localeConfigs?.dir} locale={locales(localeConfigs?.ltr)}>
				{children}
			</ConfigProvider>
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

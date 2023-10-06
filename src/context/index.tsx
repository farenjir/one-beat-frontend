"use client";

import { ReactNode, createContext, useContext } from "react";
import { Provider } from "react-redux";

import { store } from "@/store";

import callApi from "@/service";

const AppContext = createContext({});

const ApplicationContext = ({ children }: { children: ReactNode }) => {
	// initialize context
	return (
		<AppContext.Provider
			value={{
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
export default function ({ children }: { children: ReactNode }) {
	return (
		<Provider store={store}>
			<ApplicationContext>{children}</ApplicationContext>
		</Provider>
	);
}

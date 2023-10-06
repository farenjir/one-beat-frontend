"use client";

import { ReactNode, createContext, useContext } from "react";
import { Provider } from "react-redux";

import { store } from "@/store";

const AppContext = createContext({});

const GlobalStateManagements = ({ children }: { children: ReactNode }) => {
	// initialize context
	return (
		<Provider store={store}>
			<AppContext.Provider value={{}}>{children}</AppContext.Provider>
		</Provider>
	);
};

export const useAppContext = () => useContext(AppContext);

export default GlobalStateManagements;

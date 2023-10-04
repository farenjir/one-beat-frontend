"use client";

import { ReactNode, createContext } from "react";

const AppContext = createContext({});

const ApplicationContext = ({ children }: { children: ReactNode }) => {
	// initialize context
	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default ApplicationContext;

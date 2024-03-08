import Cookies from "universal-cookie";

const cookie = new Cookies();

export const getFromCookie = <T>(key: string): T => {
	return cookie.get(key);
};

export const removeFromCookie = (key: string): void => {
	cookie.remove(key);
};

export const storeInCookie = (key: string, value: unknown, maxAge?: number): void => {
	cookie.set(key, value, {
		path: "/",
		maxAge,
		// maxAge: 24 * 24 * 3600,
	});
};

export const setToStorage = (key = "", value: unknown, sessionStorage?: boolean) => {
	if (typeof window !== "undefined") {
		try {
			window[sessionStorage ? "sessionStorage" : "localStorage"].setItem(key, JSON.stringify(value));
		} catch {
			return null;
		}
	}
};

export const getFromStorage = (key = "", sessionStorage?: boolean) => {
	if (typeof window !== "undefined") {
		try {
			const value = window[sessionStorage ? "sessionStorage" : "localStorage"].getItem(key);
			if (value) {
				return JSON.parse(value);
			}
		} catch {
			return null;
		}
	}
};

export const removeFromStorage = (key = "", sessionStorage?: boolean) => {
	if (typeof window !== "undefined") {
		try {
			window[sessionStorage ? "sessionStorage" : "localStorage"].removeItem(key);
		} catch {
			return null;
		}
	}
};

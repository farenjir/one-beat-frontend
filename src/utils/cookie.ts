import Cookies from "universal-cookie";

const cookie = new Cookies();

const getFromCookie = <T>(key: string): T => {
	return cookie.get(key);
};

const removeFromCookie = (key: string): void => {
	cookie.remove(key);
};

const storeInCookie = (key: string, value: unknown): void => {
	cookie.set(key, value, {
		path: "/",
		// maxAge: 24 * 24 * 3600,
	});
};

export { storeInCookie, removeFromCookie, getFromCookie };

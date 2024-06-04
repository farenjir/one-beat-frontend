import axios, { AxiosError, AxiosHeaderValue, AxiosResponse, Method, ResponseType } from "axios";

import { ACCESS_TOKEN } from "@/types/constance";

export interface IApi<TBody> {
	url: string;
	queries?: { [key: string]: any };
	body?: TBody | {};
	method?: Method;
	contentType?: AxiosHeaderValue;
	responseType?: ResponseType;
	// https://nextjs.org/docs/app/api-reference/functions/fetch
	next?: NextFetchRequestConfig;
	nextCatch?: RequestCache;
}

// baseURL
const baseURL = process.env.NEXT_APP_BACKEND_SERVER;
// axiosInstance
const axiosInstance = axios.create({
	baseURL,
	headers: {
		"Accept-Language": "en",
		"Api-Version": "1.0",
		Accept: "application/json",
	},
});

const callApi = <TRes, TBody = {}>({
	url = "",
	method = "GET",
	body = {},
	queries = {},
	contentType = "application/json",
	responseType = "json",
	nextCatch,
	next,
}: IApi<TBody>): Promise<TRes> => {
	// check ssr and csr
	const isCSR = typeof window !== "undefined";
	// notification makers
	if (isCSR) {
		var { ISuccess, successCodeMessage } = require("./messages/successCode");
		var { IError, errorCodeMessage } = require("./messages/errorCode");
	}
	// set token
	let token = "";
	if (isCSR) {
		// token = getFromCookie(ACCESS_TOKEN);
	} else {
		const { cookies } = require("next/headers");
		token = cookies().get(ACCESS_TOKEN)?.value;
	}
	// set request configs
	axiosInstance.interceptors.request.use(
		(config) => {
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			Object.assign(config, {
				contentType,
				withCredentials: true, // send cookie with request
				responseType,
				catch: nextCatch, // next fetch extended configs
				next,
			});
			// return
			return config;
		},
		(err) => {
			throw err;
		},
	);
	//  set response configs
	axiosInstance.interceptors.response.use(
		// (response: AxiosResponse<ISuccess<TRes>, IError>) => {
		(response: AxiosResponse<TRes>) => {
			const { code, message, description, timestamp }: any = response?.data || {};
			if (isCSR && code) {
				successCodeMessage(code, message, description);
			}
			return response;
		},
		// ({ response, ...error }: AxiosError<IError>) => {
		({ response, ...error }: AxiosError<unknown>) => {
			const { appCode, status = 500, code, message, method, path }: any = response?.data || {};
			if (isCSR && (appCode || status)) {
				errorCodeMessage(appCode, status, message, code, method, path);
			}
			return { data: { result: null }, ...error };
		},
	);
	// return
	return new Promise((resolve, reject) => {
		axiosInstance({ baseURL, url, method, params: queries, data: body })
			.then((response) => {
				resolve(response.data?.result);
			})
			.catch((e) => {
				reject(e);
			});
	});
};

export default callApi;

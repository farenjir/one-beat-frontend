import axios, { AxiosError, AxiosHeaderValue, AxiosResponse, Method, ResponseType } from "axios";

import { ISuccess, successCodeMessage } from "./messageSuccessCode";
import { IError, errorCodeMessage } from "./messageErrorCode";

export interface IApi {
	url: string;
	bodyData?: object;
	queryParams?: object;
	method?: Method;
	contentType?: AxiosHeaderValue;
	responseType?: ResponseType;
}

const callApi = <T>({
	url = "",
	method = "GET",
	bodyData = {},
	queryParams = {},
	contentType = "application/json",
	responseType = "json",
}: IApi): Promise<T> => {
	// baseURL
	const baseURL = process.env.REACT_APP_BACKEND_SERVER;
	// axiosInstance
	const axiosInstance = axios.create({
		// baseURL,
		headers: {
			"Accept-Language": "en",
			"Api-Version": "1.0",
			Accept: "application/json",
		},
	});
	// set request configs
	const token = "";
	axiosInstance.interceptors.request.use(
		(config) => {
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			let customConfig = Object.assign({}, config, {
				contentType,
				responseType,
				withCredentials: true, // send cookie with request
			});
			// return
			return customConfig;
		},
		(err) => {
			throw err;
		},
	);
	//  set response configs
	axiosInstance.interceptors.response.use(
		(res: AxiosResponse<ISuccess<T>>) => {
			if (res?.data?.code) {
				successCodeMessage(res.data.code);
			}
			return res;
		},
		({ response, ...error }: AxiosError<IError>) => {
			const { status, code }: any = response || {};
			if (status || code) {
				errorCodeMessage(status || code);
			}
			return { response, ...error };
		},
	);
	// return
	return new Promise((resolve, reject) => {
		axiosInstance({ url, method, params: queryParams, data: bodyData })
			.then((res) => {
				resolve(res?.data?.result);
			})
			.catch((e) => {
				reject(e);
			});
	});
};

export default callApi;

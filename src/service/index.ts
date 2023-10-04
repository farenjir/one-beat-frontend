import axios, { AxiosError, AxiosResponse } from "axios";

import { IResponse, successCodeMessage } from "./messageSuccessCode";
import { IError, errorCodeMessage } from "./messageErrorCode";

interface IApi {
	url: string;
	method: string;
	data: object;
	params: object;
	contentType: string;
	responseType: string;
}

const callApi = ({
	url = "",
	method = "GET",
	data = {},
	params = {},
	contentType = "application/json",
	responseType = "json",
}: IApi): Promise<unknown> => {
	// baseURL
	const baseURL = process.env.REACT_APP_BACKEND_SERVER;
	// axiosInstance
	const axiosInstance = axios.create({
		baseURL,
		headers: {
			"Accept-Language": "en",
			"Api-Version": "1.0",
			"Accept": "application/json",
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
		(res: AxiosResponse<IResponse>) => {
			if (res?.data?.code) {
				successCodeMessage(res?.data?.code);
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
		axiosInstance({ url, method, params, data })
			.then((res) => {
				resolve(res?.data);
			})
			.catch((e) => {
				reject(e);
			});
	});
};

export default callApi;

import axios, { AxiosError, AxiosHeaderValue, AxiosResponse, Method, ResponseType } from "axios";

export interface IApi<TBody> {
	url: string;
	queries?: { [key: string]: any };
	body?: TBody | {};
	method?: Method;
	contentType?: AxiosHeaderValue;
	responseType?: ResponseType;
}

const callApiServerSide = <TRes, TBody = {}>({
	url = "",
	method = "GET",
	body = {},
	queries = {},
	contentType = "application/json",
	responseType = "json",
}: IApi<TBody>): Promise<TRes> => {
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
				withCredentials: false, // send cookie with request
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
		(response: AxiosResponse<TRes>) => {
			return response;
		},
		({ response, ...error }: AxiosError<null>) => {
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

export default callApiServerSide;

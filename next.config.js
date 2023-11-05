// @ts-check

/** @type {import("next").NextConfig} */

const { NEXT_APP_BASE_URL, NEXT_APP_BACKEND_SERVER, NODE_ENV } = process.env;
const { PHASE_DEVELOPMENT_SERVER: development, PHASE_PRODUCTION_BUILD: production } = require("next/constants");

const nextConfig = {
	reactStrictMode: true,
	env: { NEXT_APP_BASE_URL, NEXT_APP_BACKEND_SERVER },
};

module.exports = (/** @type {string} */ phase, { defaultConfig }) => {
	// if (phase === development || phase === production) {
	// 	const withPWA = require("@ducanh2912/next-pwa").default({
	// 		dest: "public/pwa",
	// 		disable: false, // NODE_ENV !== "production"
	// 		register: true,
	// 		scope: "/",
	// 		// sw: "service-worker.js",
	// 		// customWorkerSrc: "service-worker",
	// 		// customWorkerDest: "somewhere-else", // defaults to `dest`
	// 		// customWorkerPrefix: "not/a-worker",
	// 	});
	// 	return withPWA(nextConfig);
	// }
	return nextConfig;
};

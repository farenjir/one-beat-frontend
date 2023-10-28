// @ts-check

/** @type {import("next").NextConfig} */

const { NEXT_APP_BASE_URL, NEXT_APP_BACKEND_SERVER } = process.env;
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

const nextConfig = {
	reactStrictMode: true,
	env: { NEXT_APP_BASE_URL, NEXT_APP_BACKEND_SERVER },
};

module.exports = (/** @type {string} */ phase, { defaultConfig }) => {
	console.log(phase);
	if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
		const withPWA = require("@ducanh2912/next-pwa").default({
			dest: "public/pwa",
			disable: false,
			// disable: process.env.NODE_ENV === "development",
			register: true,
			scope: "/",
			// sw: "service-worker.js",
			// customWorkerSrc: "service-worker",
			// customWorkerDest: "somewhere-else", // defaults to `dest`
			// customWorkerPrefix: "not/a-worker",
		});
		return withPWA(nextConfig);
	}
	return nextConfig;
};

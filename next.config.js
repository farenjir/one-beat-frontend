// @ts-check

/** @type {import("next").NextConfig} */

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

const nextConfig = {
	reactStrictMode: true,
};

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
		const withPWA = require("@ducanh2912/next-pwa").default({
			dest: "public/pwa",
			disable: false,
			// disable: process.env.NODE_ENV === "development",
			// register: true,
			// scope: "/app",
			// sw: "service-worker.js",
			// customWorkerSrc: "service-worker",
			// customWorkerDest: "somewhere-else", // defaults to `dest`
			// customWorkerPrefix: "not/a-worker",
		});
		return withPWA(nextConfig);
	}
	return nextConfig;
};

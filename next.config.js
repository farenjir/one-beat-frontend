/** @type {import("next").NextConfig} */

const { NEXT_APP_BASE_URL, NEXT_APP_BACKEND_SERVER, NODE_ENV } = process.env;
const env = { NEXT_APP_BASE_URL, NEXT_APP_BACKEND_SERVER };

const withPWA = require("next-pwa")({
	dest: "public/pwa",
	register: true,
	skipWaiting: true,
	disable: NODE_ENV === "development",
});

const nextConfig = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	env,
	// eslint: {
	//   ignoreDuringBuilds: true,
	// },
	// typescript: {
	// 	ignoreBuildErrors: true,
	// },
	// generateBuildId: async () => "my-build-id",
	// generateEtags: false,
	// webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => config,
});

module.exports = nextConfig;

// module.exports = (/** @type {string} */ phase, { defaultConfig }) => {
// 	// if (phase === development || phase === production) {
// 	// 	const withPWA = require("@ducanh2912/next-pwa").default({
// 	// 		dest: "public/pwa",
// 	// 		disable: false, // NODE_ENV !== "production"
// 	// 		register: true,
// 	// 		scope: "/",
// 	// 		// sw: "service-worker.js",
// 	// 		// customWorkerSrc: "service-worker",
// 	// 		// customWorkerDest: "somewhere-else", // defaults to `dest`
// 	// 		// customWorkerPrefix: "not/a-worker",
// 	// 	});
// 	// 	return withPWA(nextConfig);
// 	// }
// 	return nextConfig;
// };

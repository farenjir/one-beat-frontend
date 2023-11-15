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
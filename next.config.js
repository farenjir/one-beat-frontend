/** @type {import("next").NextConfig} */

const { NEXT_APP_BASE_URL, NEXT_APP_BACKEND_SERVER, NODE_ENV } = process.env;
const env = { NEXT_APP_BASE_URL, NEXT_APP_BACKEND_SERVER };

const withPWA = require("next-pwa")({
	dest: "public/pwa",
	register: true,
	skipWaiting: true,
	disable: NODE_ENV === "development",
});

module.exports = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	env,
	// *** next 14 caching
	// cacheHandler: require.resolve('./cache-handler.js'),
	// cacheMaxMemorySize: 0, // disable default in-memory caching
	// ***
	// eslint: {
	//   ignoreDuringBuilds: true,
	// },
	// typescript: {
	// 	ignoreBuildErrors: true,
	// },
	// images: {
	//     remotePatterns: [{
	//         protocol: 'https',
	//         hostname: '**.notion.so',
	//     }, {
	//         protocol: 'https',
	//         hostname: '**.amazonaws.com',
	//     }, {
	//         protocol: 'https',
	//         hostname: '**.googleapis.com',
	//     }],
	//     domains: ['flagcdn.com'],
	//     formats: ['image/avif', 'image/webp'],
	//     minimumCacheTTL: 60 * 60, // cache for 1h
	// }
	// generateBuildId: async () => "my-build-id",
	// generateEtags: false,
	// webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => config,
});

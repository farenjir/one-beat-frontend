const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jest-environment-jsdom",
	preset: "ts-jest",
	testEnvironment: "node",
	coverageDirectory: "coverage",
	// root
	// rootDir: "./src",
	// modulePaths: ["<rootDir>"],
	// // schema
	// moduleFileExtensions: ["js", "json", "ejs", "ts"],
	// testRegex: "(/__tests__/*|(\\.|/)(e2e.test))\\.ts$",
	// transform: {
	// 	"^.+\\.(t|j)s$": "ts-jest",
	// },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

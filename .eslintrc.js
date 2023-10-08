module.exports = {
	root: true,
	plugins: ["testing-library"],
	extends: ["next/core-web-vitals"],
	rules: {},
	overrides: [
		// Only uses Testing Library lint rules in test files
		{
			files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
			extends: ["plugin:testing-library/react"],
		},
	],
};

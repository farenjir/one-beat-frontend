module.exports = {
	root: true,
	extends: ["next/core-web-vitals"],
	rules: {
		"react-hooks/exhaustive-deps": "off",
	},
	plugins: ["testing-library"],
	overrides: [
		{
			files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
			extends: ["plugin:testing-library/react"], // Only uses Testing Library lint rules in test files
		},
	],
};

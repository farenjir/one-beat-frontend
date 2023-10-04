module.exports = {
    root: true,
    plugins: ["testing-library", "@tanstack/query"],
    extends: ["next/core-web-vitals", "plugin:@tanstack/eslint-plugin-query/recommended"],
    rules: {
        "@tanstack/query/exhaustive-deps": "error",
        "@tanstack/query/prefer-query-object-syntax": "error",
        "@tanstack/query/stable-query-client": "error",
    },
    overrides: [
        // Only uses Testing Library lint rules in test files
        {
            files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
            extends: ["plugin:testing-library/react"],
        },
    ],
};

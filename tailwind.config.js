/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				yekan: ["var(--font-yekan)"],
				yekan: ["var(--font-roboto)"],
			},
			colors: {
				navGray: "rgba(0, 0, 0, 0.05)",
				subOrange: "rgba(250, 150, 0, 0.8)",
				"subOrange-light": "rgba(250, 150, 0, 0.4)",
			},
		},
	},
};

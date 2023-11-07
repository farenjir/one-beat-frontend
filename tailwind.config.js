/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				yekan: ["var(--font-yekan)"],
			},
			colors: {
				navGray: "#0000000d",
				subOrange: "#fa9600cc",
				"subOrange-light": "#ffa50050",
			},
		},
	},
};

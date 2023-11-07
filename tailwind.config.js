/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				yekan: ["var(--font-yekan)"],
			},
			colors: {
				appGrey: "#0000000d",
				appSubOrange: "#fa9600cc",
				appSubOrangeLight: "#ffa50050",
			},
		},
	},
};

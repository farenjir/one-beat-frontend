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
				appOrange: "#fa9600cc",
				appOrangeLight: "#ffa50050",
				appGreen: "#52c41a",
				appGreenLight: "#52c41a",
				appRed: "#eb2907b7",
				appRedLight: "#eb2907b7",
				appBlue: "#2196f3",
				appBlueLight: "#2196f3",
			},
		},
	},
};

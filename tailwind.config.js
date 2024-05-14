/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				yekan: ["var(--font-yekan)"],
			},
			colors: {
				black: "#151515",
				// custom colors
				appBlack: "#3b3d3f",
				appBlur: "#0000000d",
				appGrey: "#808080",
				appGreyLighter: "#bdb9b9",
				appLightGrey: "#222325",
				appOrange: "#FFA800",
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

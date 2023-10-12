/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navGray: "rgba(0, 0, 0, 0.01)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

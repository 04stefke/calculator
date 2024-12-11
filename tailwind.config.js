/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(222, 26%, 31%)",
				toggleBackground: "hsl(223, 31%, 20%)",
				screenBackground: "hsl(224, 36%, 15%)",
				keyBg: "hsl(225, 21%, 49%)",
				keyShadow: "hsl(224, 28%, 35%)",
				keyRedBgToggle: "hsl(6, 63%, 50%)",
				keyRedShadow: "hsl(6, 70%, 34%)",
				keyLightGrayBg: "hsl(30, 25%, 89%)",
				keyGrayishShadow: "hsl(28, 16%, 65%)",
				textDarkGrayish: "hsl(221, 14%, 31%)",
				textWhite: "hsl(0, 0%, 100%)",
			},
		},
	},
	plugins: [],
};

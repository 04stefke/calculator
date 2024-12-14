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
				keyRedBgToggle: "hsl(6, 63%, 50%)",
				keyLightGrayBg: "hsl(30, 25%, 89%)",
				textDarkGrayish: "hsl(221, 14%, 31%)",
				textWhite: "hsl(0, 0%, 100%)",
			},
			boxShadow: {
				"inner-normalShadow": "inset 0 -3px 3px hsl(224, 28%, 35%)",
				"inner-redShadow": "inset 0 -3px 3px hsl(6, 70%, 34%)",
				"inner-grayShadow": "inset 0 -3px 3px hsl(28, 16%, 65%)",
			},
			fontFamily: {
				leagueSpartan: ['League Spartan', 'sans-serif']
			}
		},
	},
	plugins: [],
};

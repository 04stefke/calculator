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
			theme1: {
				background: {
					main: "hsl(222, 26%, 31%)",
					toggle: "hsl(223, 31%, 20%)",
					screen: "hsl(224, 36%, 15%)",
				},
				key: {
					keyOne: "hsl(225, 21%, 49%)",
					"keyOne-shadow": "inset 0 -3px 3px hsl(224, 28%, 35%)",
					keyTwo: "hsl(6, 63%, 50%)",
					"keyTwo-shadow": "inset 0 -3px 3px hsl(6, 70%, 34%)",
					keyThree: "hsl(30, 25%, 89%)",
					"keyThree-shadow": "inset 0 -3px 3px hsl(28, 16%, 65%)",
				},
				text: {
					textOne: "hsl(221, 14%, 31%)",
					white: "hsl(0, 0%, 100%)",
				},
			},
			theme2: {
				background: {
					main: "hsl(0, 0%, 90%)",
					toggle: "hsl(0, 5%, 81%)",
					screen: "hsl(0, 0%, 93%)",
				},
				key: {
					keyOne: "hsl(185, 42%, 37%)",
					"keyOne-shadow": "inset 0 -3px 3px hsl(185, 58%, 25%)",
					keyTwo: "hsl(25, 98%, 40%)",
					"keyTwo-shadow": "inset 0 -3px 3px hsl(25, 99%, 27%)",
					keyThree: "hsl(45, 7%, 89%)",
					"keyThree-shadow": "inset 0 -3px 3px hsl(35, 11%, 61%)",
				},
				text: {
					textOne: "hsl(60, 10%, 19%)",
					white: "hsl(0, 0%, 100%)",
				},
			},
			theme3: {
				background: {
					main: "hsl(268, 75%, 9%)",
					toggle: "hsl(268, 71%, 12%)",
					screen: "hsl(268, 71%, 12%)",
				},
				key: {
					keyOne: "hsl(281, 89%, 26%)",
					"keyOne-shadow": "inset 0 -3px 3px hsl(285, 91%, 52%)",
					keyTwo: "hsl(176, 100%, 44%)",
					"keyTwo-shadow": "inset 0 -3px 3px hsl(177, 92%, 70%)",
					keyThree: "hsl(268, 47%, 21%)",
					"keyThree-dark-shadow": "inset 0 -3px 3px hsl(290, 70%, 36%)",
				},
				text: {
					textOne: "hsl(52, 100%, 62%)",
					darkBlue: "hsl(198, 20%, 13%)",
					white: "hsl(0, 0%, 100%)",
				},
			},
			boxShadow: {
				"inner-normalShadow": "inset 0 -3px 3px hsl(224, 28%, 35%)",
				"inner-redShadow": "inset 0 -3px 3px hsl(6, 70%, 34%)",
				"inner-grayShadow": "inset 0 -3px 3px hsl(28, 16%, 65%)",
			},
		},
	},
	plugins: [],
};

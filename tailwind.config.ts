import type {Config} from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'neo-bg': '#e0e0e0',
				'earia-black': 'hsl(240, 2%, 12%)',
				'smoky-Black': 'hsl(0, 0%, 7%)',
				'bitter-shimmer': 'hsl(0, 43%, 51%)',
				'background-black': 'hsl(0, 0%, 5%)',
				'earia-black-2': 'hsl(240, 2%, 13%)',
				'earia-gray': 'hsl(240, 1%, 17%,0.75)',
				'orange-yellow': 'hsl(45, 100%, 72%)',
				jet: 'hsl(0, 0%, 22%)',
				onyx: 'hsl(240, 1%, 17%)',
				'eerie-black-1': 'hsl(240, 2%, 13%)',
				'eerie-black-2': 'hsl(240, 2%, 12%)',
				'smoky-black': 'hsl(0, 0%, 7%)',
				'white-1': 'hsl(0, 0%, 100%)',
				'white-2': 'hsl(0, 0%, 98%)',
				'orange-yellow-crayola': 'hsl(45, 100%, 72%)',
				'vegas-gold': 'hsl(45, 54%, 58%)',
				'light-gray': 'hsl(0, 0%, 84%)',
				'light-gray-70': 'hsla(0, 0%, 84%, 0.7)',
				'bittersweet-shimmer': 'hsl(0, 43%, 51%)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-onyx': `linear-gradient(
						to bottom right, 
						hsl(240, 1%, 25%) 3%, 
						hsl(0, 0%, 19%) 97%
					)`,
			},
			animation: {
				gradient: 'gradient 8s linear infinite',
				'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
				slide: 'slide var(--speed) ease-in-out infinite alternate',
			},
			keyframes: {
				gradient: {
					to: {
						backgroundPosition: 'var(--bg-size) 0',
					},
				},
				'spin-around': {
					'0%': {
						transform: 'translateZ(0) rotate(0)',
					},
					'15%, 35%': {
						transform: 'translateZ(0) rotate(90deg)',
					},
					'65%, 85%': {
						transform: 'translateZ(0) rotate(270deg)',
					},
					'100%': {
						transform: 'translateZ(0) rotate(360deg)',
					},
				},
				slide: {
					to: {
						transform: 'translate(calc(100cqw - 100%), 0)',
					},
				},
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
export default config

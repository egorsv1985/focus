/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js}', // Путь к вашим локальным файлам
		'./public_html/**/*.{php,js}', // Путь к файлам на сервере Битрикс
	],

	safelist: [],
	theme: {
		extend: {
			fontFamily: {
				Onest: ['Onest', 'sans-serif'],
			},
		},
		lineHeight: {
			tight: '1.2',
			normal: '1',
		},
		boxShadow: {
			inner: '0 0 10px 0 rgba(0, 0, 0, 1);',
			combined:
				'0 2px 8px 0 rgb(71, 74, 89, .02), 0 2px 2px 0 rgb(71, 74, 89, .08)',
			table: '0 0 15px 0 rgb(0, 0, 0, .25)',
		},
		borderRadius: {
			none: '0',
			small: '2px',
			color: '5px',
			full: '9999px',
			standard: '20px',
			large: '30px',
			big: '100px',
		},
		letterSpacing: {
			wider: '.01em',
		},
		fontSize: {
			mini: '.75rem',
			sm: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '2rem',
			'4xl': '2.25rem',
			'5xl': '2.5rem',
			'6xl': 'var(--6xl)',
		},
		colors: {
			primary: '#3742f3',
			secondary: '#f9f9f9',
			success: '#9b9b9b',
			main: '#e4e9ee',
			txt_blue: '#3742f3',
			txt_gray: '#808080',
			txt_breadcrumb: '#878787',
			txt_news: '#787878',
			txt_date: '#A6A6A6',
			dark: '#333',
			txt_dark: '#333',
			white: '#fff',
			light_gray: '#F0EFEF',
			txt_light_gray: '#ACACAC',
			input_border: '#D3D3D3',
			news_border: '#F1F1F1',
			border_color: '#EBE9E9',
			border_input: '#A9A0A0',
			hover: '#1620BD',
			checkbox: '#D9D9D9',
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
		},
		container: {
			center: true,
		},
		// gridColumn: {
		// 	'span-full': 'span 5 / span -1',
		// },
	},
	plugins: [
		require('flowbite/plugin'),
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '1024px',
					},
					'@screen xl': {
						maxWidth: '1304px',
					},
				},
			})
		},
	],
}

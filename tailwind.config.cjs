/** @type {import('tailwindcss').Config} */

const preline = require('preline/plugin.js');

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./public/**/*.astro',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['ui-sans-serif', 'system-ui'],
			inter: ['Inter'],
			display: ['Aeonik'],
		},
	},

	plugins: [preline],
};

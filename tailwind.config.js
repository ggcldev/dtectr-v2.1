/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			xs: { max: '479px' },
			sm: '480px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},
		extend: {
			colors: {
				primaryColor: 'hsl(219, 92%, 52%)',
				secondaryColor: 'hsl(347, 72%, 53%)',
				primaryTextColor: 'hsl(212, 82%, 11%)',
				secondaryTextColor: 'hsl(211, 11%, 56%)',
				greyDark: 'hsl(213, 13%, 86%)',
				greyLight: 'hsl(220, 13%, 95%)',
				primaryDark: 'hsl(0, 0%, 8%)',
				secondaryDark: 'hsl(0, 0%, 21%)',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Familjen Grotesk', 'sans-serif'],
			},
			fontSize: {
				'5.5xl': [
					'3.375rem',
					{ lineHeight: '48px', letterSpacing: '-0.01em' },
				],
			},
		},
	},
	plugins: [],
}

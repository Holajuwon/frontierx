/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
      colors: {
        'brand-black': '#0D0D0D',
        'brand-gray': {
          DEFAULT: '#1F1F1F',
          100: '#A2A2A2',
          200: '#8E8B8F'
        },
        'brand-red' : '#FC364C'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(15.74deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(58, 39, 63, 0.6) 47.55%, #181818 90.7%)',
        'nav-gradient': 'linear-gradient(95.91deg, #665AEF 6.04%, #FC364C 88.42%)',
        'back-gradient': 'linear-gradient(0deg, #0D0D0D, #0D0D0D), #141417',
      }
    },
	},
	plugins: [],
}

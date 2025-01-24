/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,svelte,ts,vue,jsx,tsx}'],
  safelist: [
    'from-blue-700',
    'to-blue-500',
    'from-green-700',
    'to-green-500',
    'from-yellow-700',
    'to-yellow-300',
    'from-red-700',
    'to-red-500',
  ],
  theme: {
    extend: {

      colors: {
        summerSky: '#87CEEB',
        poolBlue: '#1E90FF',
        sunshineYellow: '#FFD700',
      },
    },
  },
  plugins: [],
};

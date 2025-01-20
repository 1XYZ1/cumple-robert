/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,svelte,ts,vue,jsx,tsx}'],
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

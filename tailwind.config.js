/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        coutana: {
          "gray-100": "#3F3F3F",
          "gray-200": "#19063d",
        },
       
      },
      backgroundImage :{
        'hero-img': "url('/assets/bg-image.svg')",
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
    },
  },
  plugins: [],
};

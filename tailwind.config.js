/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  rules: [
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
      type: 'asset/resource',
    },
  ],
  theme: {
    extend: {
      
      colors:{
        primary:'#00acef',
        secondary: '#F5801F'
      },
      fontFamily: {
        'nominie': ['Nominie', 'sans-serif'],
        // 'sfpro-regular': ['Nominie', 'sans-serif'],
        // 'sfpro-ultralight-italic': ['Nominie', 'sans-serif'],
        // 'sfpro-thin-italic': ['Nominie', 'sans-serif'],
        // 'sfpro-light-italic': ['Nominie', 'sans-serif'],
        // 'sfpro-medium': ['Nominie', 'sans-serif'],
        // 'sfpro-bold': ['Nominie', 'sans-serif'],
        // 'sfpro-heavy-italic': ['Nominie', 'sans-serif'],
        // 'sfpro-black-italic': ['Nominie', 'sans-serif'],
        // 'Helvetica':['Helvetica Neue', 'sans']
      },
      zIndex: {
        '60': 60,
        '70': 70,
        // Add more as needed
      },
    },
  },
  plugins: [],
}


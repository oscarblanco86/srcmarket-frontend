/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  './App.{js,ts,tsx}', 
  './app/**/*.{js,ts,tsx}',
  './components/**/*.{js,ts,tsx}',
  './presentation/**/*.{js,ts,tsx}'
],


  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light'],
        'work-Medium': ['WorkSans-Medium'],
      }
    },
  },
  plugins: [],
};

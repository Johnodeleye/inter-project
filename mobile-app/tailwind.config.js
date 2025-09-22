
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
 fontFamily: {
          'sans': ['AlanSans-Regular', 'system-ui', 'sans-serif'],
          'sans-light': ['AlanSans-Light', 'system-ui', 'sans-serif'],
          'sans-medium': ['AlanSans-Medium', 'system-ui', 'sans-serif'],
          'sans-semibold': ['AlanSans-SemiBold', 'system-ui', 'sans-serif'],
          'sans-bold': ['AlanSans-Bold', 'system-ui', 'sans-serif'],
          'sans-black': ['AlanSans-Black', 'system-ui', 'sans-serif'],
          'sans-extrabold': ['AlanSans-ExtraBold', 'system-ui', 'sans-serif'],
          'sans-regular': ['AlanSans-Regular', 'system-ui', 'sans-serif'],
        'sans-bold': ['AlanSans-Bold', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
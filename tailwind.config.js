const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
 plugins: [nextui()],

  "animation": {
    shimmer: "shimmer 2s linear infinite"
  },
  "keyframes": {
    shimmer: {
      from: {
        "backgroundPosition": "0 0"
      },
      to: {
        "backgroundPosition": "-200% 0"
      }
    }
  }

}


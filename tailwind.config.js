/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "bs-white": "#F2EDEC",
        "bs-nurture": "#D7DCD5",
        "bs-bbox": "#0F282F",
        "bs-wblue": "#084D58",
        "bs-citron": "#D5C757",
        "bs-orange": "#CE4A2D",
      },
      backgroundImage:
      {
        'wave-bl': "url('~/public/svg/wave-blue.svg')",
      },
      fontFamily: {
        custom: ['source-han-sans-vf', 'sans-serif'], // Replace 'Your Adobe Font Family' with the actual font name from Adobe Fonts
      }
    },
  },
  plugins: [],
}


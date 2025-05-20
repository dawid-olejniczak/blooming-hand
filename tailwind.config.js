module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        forest: '#1C3A2E',
        sage: '#A7B9A2',
        sand: '#F5EBDD',
        clay: '#D5C4B1',
        bloom: '#FFCBB0',
      },
    },
  },
  plugins: [],
}

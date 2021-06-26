module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : theme =>({
        'hero' : "url('./images/image1.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

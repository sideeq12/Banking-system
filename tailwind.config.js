module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : theme =>({
        'hero-pattern' : "url('/public/images/image1.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
